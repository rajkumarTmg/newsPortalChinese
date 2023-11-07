const { getObjectId } = require('mongo-seeding');

/* eslint-disable max-len */
module.exports = [
    {
        createdAt: '1668367265458',
        updatedAt: '1668367265458',
        data: {
            'zh-cn': {
                title: 'Main page 1',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'mainPage'
                        },
                        'zh-tw': {
                            page: 'mainPage'
                        },
                        en: {
                            page: 'mainPage'
                        },
                        id: 'lafqsh9d'
                    }
                ]
            },
            'zh-tw': {
                title: 'Main page 1',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'mainPage'
                        },
                        'zh-tw': {
                            page: 'mainPage'
                        },
                        en: {
                            page: 'mainPage'
                        },
                        id: 'lafqsh9d'
                    }
                ]
            },
            en: {
                title: 'Main page 1',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'mainPage'
                        },
                        'zh-tw': {
                            page: 'mainPage'
                        },
                        en: {
                            page: 'mainPage'
                        },
                        id: 'lafqsh9d'
                    }
                ]
            }
        },
        answers: {
            ik4r8ngldlgotio: [
                {
                    userId: getObjectId('user')
                }
            ],
            ik4r8ngldlgotip: [
                {
                    userId: getObjectId('user1')
                }
            ]
        },
        completed: false,
        __v: 0
    },
    {
        createdAt: '1668367316584',
        updatedAt: '1668367316584',
        data: {
            'zh-cn': {
                title: 'Main page 2',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio1'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip1'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq1'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'mainPage'
                        },
                        'zh-tw': {
                            page: 'mainPage'
                        },
                        en: {
                            page: 'mainPage'
                        },
                        id: 'lafqsh9d'
                    }
                ]
            },
            'zh-tw': {
                title: 'Main page 2',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio1'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip1'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq1'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'mainPage'
                        },
                        'zh-tw': {
                            page: 'mainPage'
                        },
                        en: {
                            page: 'mainPage'
                        },
                        id: 'lafqsh9d'
                    }
                ]
            },
            en: {
                title: 'Main page 2',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio1'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip1'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq1'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'mainPage'
                        },
                        'zh-tw': {
                            page: 'mainPage'
                        },
                        en: {
                            page: 'mainPage'
                        },
                        id: 'lafqsh9d'
                    }
                ]
            }
        },
        completed: false,
        __v: 0
    },
    {
        createdAt: '1668367430345',
        updatedAt: '1668367510611',
        data: {
            'zh-cn': {
                title: 'Article page',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio2'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip2'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq2'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'articlePage',
                            articleId: getObjectId('test1')
                        },
                        'zh-tw': {
                            page: 'articlePage',
                            articleId: getObjectId('test1')
                        },
                        en: {
                            page: 'articlePage',
                            articleId: getObjectId('test1')
                        },
                        id: 'lafqxssk'
                    }
                ]
            },
            'zh-tw': {
                title: 'Article page',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio2'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip2'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq2'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'articlePage',
                            articleId: getObjectId('test1')
                        },
                        'zh-tw': {
                            page: 'articlePage',
                            articleId: getObjectId('test1')
                        },
                        en: {
                            page: 'articlePage',
                            articleId: getObjectId('test1')
                        },
                        id: 'lafqxssk'
                    }
                ]
            },
            en: {
                title: 'Article page',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio2'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip2'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq2'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'articlePage',
                            articleId: getObjectId('test1')
                        },
                        'zh-tw': {
                            page: 'articlePage',
                            articleId: getObjectId('test1')
                        },
                        en: {
                            page: 'articlePage',
                            articleId: getObjectId('test1')
                        },
                        id: 'lafqxssk'
                    }
                ]
            }
        },
        completed: false,
        __v: 0,
        answers: {
            ik4r8ngldlgotio2: [
                {
                    userId: getObjectId('user')
                }
            ],
            ik4r8ngldlgotip2: [
                {
                    userId: getObjectId('user1')
                }
            ]
        }
    },
    {
        createdAt: '1668367465880',
        updatedAt: '1668367522233',
        data: {
            'zh-cn': {
                title: 'Article page 2',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio3'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip3'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq3'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'articlePage',
                            articleId: getObjectId('test1')
                        },
                        'zh-tw': {
                            page: 'articlePage',
                            articleId: getObjectId('test1')
                        },
                        en: {
                            page: 'articlePage',
                            articleId: getObjectId('test1')
                        }
                    }
                ]
            },
            'zh-tw': {
                title: 'Article page 2',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio3'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip3'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq3'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'articlePage',
                            articleId: getObjectId('test1')
                        },
                        'zh-tw': {
                            page: 'articlePage',
                            articleId: getObjectId('test1')
                        },
                        en: {
                            page: 'articlePage',
                            articleId: getObjectId('test1')
                        }
                    }
                ]
            },
            en: {
                title: 'Article page 2',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio3'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip3'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq3'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'articlePage',
                            articleId: getObjectId('test1')
                        },
                        'zh-tw': {
                            page: 'articlePage',
                            articleId: getObjectId('test1')
                        },
                        en: {
                            page: 'articlePage',
                            articleId: getObjectId('test1')
                        }
                    }
                ]
            }
        },
        completed: false,
        __v: 0
    },
    {
        createdAt: '1668367493660',
        updatedAt: '1668367535590',
        data: {
            'zh-cn': {
                title: 'Category page',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio4'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip4'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq4'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'categoryPage',
                            category: '70c07ec18ef89c5309bbb093'
                        },
                        'zh-tw': {
                            page: 'categoryPage',
                            category: '70c07ec18ef89c5309bbb093'
                        },
                        en: {
                            page: 'categoryPage',
                            category: '70c07ec18ef89c5309bbb093'
                        }
                    }
                ]
            },
            'zh-tw': {
                title: 'Category page',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio4'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip4'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq4'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'categoryPage',
                            category: '70c07ec18ef89c5309bbb093'
                        },
                        'zh-tw': {
                            page: 'categoryPage',
                            category: '70c07ec18ef89c5309bbb093'
                        },
                        en: {
                            page: 'categoryPage',
                            category: '70c07ec18ef89c5309bbb093'
                        }
                    }
                ]
            },
            en: {
                title: 'Category page',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio4'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip4'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq4'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'categoryPage',
                            category: '70c07ec18ef89c5309bbb093'
                        },
                        'zh-tw': {
                            page: 'categoryPage',
                            category: '70c07ec18ef89c5309bbb093'
                        },
                        en: {
                            page: 'categoryPage',
                            category: '70c07ec18ef89c5309bbb093'
                        }
                    }
                ]
            }
        },
        completed: false,
        __v: 0,
        answers: {
            ik4r8ngldlgotio4: [
                {
                    userId: getObjectId('user')
                }
            ],
            ik4r8ngldlgotip4: [
                {
                    userId: getObjectId('user1')
                }
            ]
        }
    },
    {
        createdAt: '1668367586875',
        updatedAt: '1668367605069',
        data: {
            'zh-cn': {
                title: 'Category page 2',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio5'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip5'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq5'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'categoryPage',
                            category: '70c07ec18ef89c5309bbb093'
                        },
                        'zh-tw': {
                            page: 'categoryPage',
                            category: '70c07ec18ef89c5309bbb093'
                        },
                        en: {
                            page: 'categoryPage',
                            category: '70c07ec18ef89c5309bbb093'
                        },
                        id: 'lafqz7pd'
                    }
                ]
            },
            'zh-tw': {
                title: 'Category page 2',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio5'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip5'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq5'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'categoryPage',
                            category: '70c07ec18ef89c5309bbb093'
                        },
                        'zh-tw': {
                            page: 'categoryPage',
                            category: '70c07ec18ef89c5309bbb093'
                        },
                        en: {
                            page: 'categoryPage',
                            category: '70c07ec18ef89c5309bbb093'
                        },
                        id: 'lafqz7pd'
                    }
                ]
            },
            en: {
                title: 'Category page 2',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio5'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip5'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq5'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'categoryPage',
                            category: '70c07ec18ef89c5309bbb093'
                        },
                        'zh-tw': {
                            page: 'categoryPage',
                            category: '70c07ec18ef89c5309bbb093'
                        },
                        en: {
                            page: 'categoryPage',
                            category: '70c07ec18ef89c5309bbb093'
                        },
                        id: 'lafqz7pd'
                    }
                ]
            }
        },
        completed: false,
        __v: 0
    },
    {
        createdAt: '1668367641111',
        updatedAt: '1668367655236',
        data: {
            'zh-cn': {
                title: 'Subcategory page',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio6'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip6'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq6'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'subCategoryPage',
                            category: 'd2d066371475dee7a2d496ca'
                        },
                        'zh-tw': {
                            page: 'subCategoryPage',
                            category: 'd2d066371475dee7a2d496ca'
                        },
                        en: {
                            page: 'subCategoryPage',
                            category: 'd2d066371475dee7a2d496ca'
                        },
                        id: 'lafr0lak'
                    }
                ]
            },
            'zh-tw': {
                title: 'Subcategory page',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio6'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip6'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq6'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'subCategoryPage',
                            category: 'd2d066371475dee7a2d496ca'
                        },
                        'zh-tw': {
                            page: 'subCategoryPage',
                            category: 'd2d066371475dee7a2d496ca'
                        },
                        en: {
                            page: 'subCategoryPage',
                            category: 'd2d066371475dee7a2d496ca'
                        },
                        id: 'lafr0lak'
                    }
                ]
            },
            en: {
                title: 'Subcategory page',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio6'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip6'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq6'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'subCategoryPage',
                            category: 'd2d066371475dee7a2d496ca'
                        },
                        'zh-tw': {
                            page: 'subCategoryPage',
                            category: 'd2d066371475dee7a2d496ca'
                        },
                        en: {
                            page: 'subCategoryPage',
                            category: 'd2d066371475dee7a2d496ca'
                        },
                        id: 'lafr0lak'
                    }
                ]
            }
        },
        completed: false,
        __v: 0,
        answers: {
            ik4r8ngldlgotio6: [
                {
                    userId: getObjectId('user')
                }
            ],
            ik4r8ngldlgotip6: [
                {
                    userId: getObjectId('user1')
                }
            ]
        }
    },
    {
        createdAt: '1668367691921',
        updatedAt: '1668367715612',
        data: {
            'zh-cn': {
                title: 'Subcategory page 2',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio7'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip7'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq7'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'subCategoryPage',
                            category: 'd2d066371475dee7a2d496ca'
                        },
                        'zh-tw': {
                            page: 'subCategoryPage',
                            category: 'd2d066371475dee7a2d496ca'
                        },
                        en: {
                            page: 'subCategoryPage',
                            category: 'd2d066371475dee7a2d496ca'
                        },
                        id: 'lafr1lrx'
                    }
                ]
            },
            'zh-tw': {
                title: 'Subcategory page 2',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio7'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip7'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq7'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'subCategoryPage',
                            category: 'd2d066371475dee7a2d496ca'
                        },
                        'zh-tw': {
                            page: 'subCategoryPage',
                            category: 'd2d066371475dee7a2d496ca'
                        },
                        en: {
                            page: 'subCategoryPage',
                            category: 'd2d066371475dee7a2d496ca'
                        },
                        id: 'lafr1lrx'
                    }
                ]
            },
            en: {
                title: 'Subcategory page 2',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio7'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip7'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq7'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'subCategoryPage',
                            category: 'd2d066371475dee7a2d496ca'
                        },
                        'zh-tw': {
                            page: 'subCategoryPage',
                            category: 'd2d066371475dee7a2d496ca'
                        },
                        en: {
                            page: 'subCategoryPage',
                            category: 'd2d066371475dee7a2d496ca'
                        },
                        id: 'lafr1lrx'
                    }
                ]
            }
        },
        completed: false,
        __v: 0
    },
    {
        createdAt: '1668367763885',
        updatedAt: '1668367763885',
        data: {
            'zh-cn': {
                title: 'Multimedia page 2',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio8'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip8'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq8'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'multimediaPage'
                        },
                        'zh-tw': {
                            page: 'multimediaPage'
                        },
                        en: {
                            page: 'multimediaPage'
                        },
                        id: 'lafr31ym'
                    }
                ]
            },
            'zh-tw': {
                title: 'Multimedia page 2',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio8'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip8'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq8'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'multimediaPage'
                        },
                        'zh-tw': {
                            page: 'multimediaPage'
                        },
                        en: {
                            page: 'multimediaPage'
                        },
                        id: 'lafr31ym'
                    }
                ]
            },
            en: {
                title: 'Multimedia page 2',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio8'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip8'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq8'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'multimediaPage'
                        },
                        'zh-tw': {
                            page: 'multimediaPage'
                        },
                        en: {
                            page: 'multimediaPage'
                        },
                        id: 'lafr31ym'
                    }
                ]
            }
        },
        completed: false,
        __v: 0,
        answers: {
            ik4r8ngldlgotio8: [
                {
                    userId: getObjectId('user')
                }
            ],
            ik4r8ngldlgotip8: [
                {
                    userId: getObjectId('user1')
                }
            ]
        }
    },
    {
        createdAt: '1668367795433',
        updatedAt: '1668367795433',
        data: {
            'zh-cn': {
                title: 'Multimedia page',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio9'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip9'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq9'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'multimediaPage'
                        },
                        'zh-tw': {
                            page: 'multimediaPage'
                        },
                        en: {
                            page: 'multimediaPage'
                        },
                        id: 'lafr3m8o'
                    }
                ]
            },
            'zh-tw': {
                title: 'Multimedia page',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio9'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip9'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq9'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'multimediaPage'
                        },
                        'zh-tw': {
                            page: 'multimediaPage'
                        },
                        en: {
                            page: 'multimediaPage'
                        },
                        id: 'lafr3m8o'
                    }
                ]
            },
            en: {
                title: 'Multimedia page',
                date: 1664928000000,
                editor:
          '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda accusantium error voluptate impedit soluta, est quaerat sint deleniti nisi et, dolores animi ullam reprehenderit illum doloribus repellat neque pariatur! Harum?</p>',
                votingOptions: [
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 1'
                            },
                            'zh-tw': {
                                variant: 'option 1'
                            },
                            en: {
                                variant: 'option 1'
                            }
                        },
                        variantId: 'ik4r8ngldlgotio9'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 2'
                            },
                            'zh-tw': {
                                variant: 'option 2'
                            },
                            en: {
                                variant: 'option 2'
                            }
                        },
                        variantId: 'ik4r8ngldlgotip9'
                    },
                    {
                        id: 'option',
                        name: 'Vote Option',
                        chosen: false,
                        data: {
                            'zh-cn': {
                                variant: 'option 3'
                            },
                            'zh-tw': {
                                variant: 'option 3'
                            },
                            en: {
                                variant: 'option 3'
                            }
                        },
                        variantId: 'ik4r8ngldlgotiq9'
                    }
                ],
                priorities: [
                    {
                        'zh-cn': {
                            page: 'multimediaPage'
                        },
                        'zh-tw': {
                            page: 'multimediaPage'
                        },
                        en: {
                            page: 'multimediaPage'
                        },
                        id: 'lafr3m8o'
                    }
                ]
            }
        },
        completed: false,
        __v: 0
    }
];
