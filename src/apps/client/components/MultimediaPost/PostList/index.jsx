import React, { useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';
import MultimediaPageItem from '../../MultimediaPageItem';
import { useRouter } from 'next/router';
import getPostsByType from '../../../services/server/getPostsByType';
import PropTypes from 'prop-types';
// IMAGES
import ArrowBasicIconSVG from '../../../../../../public/images/svg/arrowBasic.svg';
// HOOKS
import { useWindowSize } from '../../../utils/useWindowSize';
import { FormattedMessage } from 'react-intl';

const PostList = ({ post }) => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const { width } = useWindowSize();
    const isTablet = useMemo(() => width <= 1280, [width]);
    const isMobile = useMemo(() => width <= 526, [width]);
    const itemsPerPage = useMemo(() => isMobile ? 3 : isTablet ? 6 : 14, [isMobile, isTablet]);
    const router = useRouter();

    useEffect(() => {
        if (width) {
            getPostsData(1);
        }
    }, [width, itemsPerPage, post, router.locale]);

    useEffect(() => {
        if (width) {
            getPostsData(page);
        }
    }, [page, width]);

    const getPostsData = (page) => {
        getPostsByType({
            locale: router.locale,
            page: page,
            size: itemsPerPage,
            sort: 'desc',
            excludeArticleIds: post._id.toString(),
            type: post.type
        }).then(result => {
            if (page === 1) {
                setPosts([...result.paginatedResults]);
            } else {
                setPosts([...posts, ...result.paginatedResults]);
            }
            setTotalPages(Math.ceil(result.totalCount / itemsPerPage));
        });
    };

    const handleLoadMore = () => {
        if (page + 1 <= totalPages) {
            setPage(page + 1);
        }
    };

    return (
        <div className={styles.root}>
            <div className={styles.titleWrapper}>
                <div className={styles.containerLeft}>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                </div>
                <h6 className={styles.title}>
                    <FormattedMessage id='multimedia.hotVideo'/>
                </h6>
                <div className={styles.containerRight}>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                    <span className={styles.wholeLine}/>
                </div>
            </div>
            <div className={styles.listWrapper}>
                <div className={styles.list}>
                    {posts.map((post) => (
                        <div className={styles.itemWrapper} key={post?._id}>
                            <MultimediaPageItem
                                title='热点新闻头条最新文章最上上左两行头条行头条'
                                type={post.type}
                                theme='postPage'
                                post={post}
                            />
                        </div>
                    ))}
                </div>
                {
                    page < totalPages &&
                    <button className={styles.loadMore} onClick={handleLoadMore}>
                        <FormattedMessage id='common.loadMore'/>...
                        <ArrowBasicIconSVG className={styles.icon}/>
                    </button>
                }
            </div>
        </div>
    );
};

PostList.propTypes = {
    post: PropTypes.object
};

export default PostList;
