/* eslint-disable max-len */
const clickHere = {
    en: 'Please, click here',
    'zh-cn': '请点击这里',
    'zh-tw': '請點擊這裡'
};

const spreadThis = {
    en: 'Please spread this',
    'zh-cn': '请传播这个',
    'zh-tw': '請傳播這個'
};

const media = {
    en: 'New San Cai Media',
    'zh-cn': '新三才传媒',
    'zh-tw': '新三才傳媒'
};

export default function ({ domain, title, link, content, lang = 'en' }) {
    return `
    <!DOCTYPE html>
<html lang=${lang}>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <style>
        body{margin: 0;padding: 0;}
        img{display: block;}
        table{padding: 0;margin: 0;}
        a{color: inherit; text-decoration: none; font-family: inherit; line-height: inherit; -webkit-text-size-adjust: none; cursor: pointer;}
    </style>
</head>
<body>
<table border="0" cellpadding="0" cellspacing="0" style="padding: 0 15px; width: 600px; max-width: 600px; background: #FFFFFF; box-sizing: border-box;">
    <tbody>
        <tr style="padding: 92px 0 2px; height: 127px;">
            <td style="box-sizing: border-box;" valign="bottom" align="center">
                <a href="${domain}" target="_blank" style="height: 35px; width: 111px; margin: 0 auto; display: block; box-sizing: border-box">
                    <img src="cid:logo" border="0" width="111" height="35">
                </a>
            </td>
        </tr>
         <tr style="padding: 0;">
            <td style="box-sizing: border-box;" valign="center" align="center">
               <span style="font-family: Arial, sans-serif; font-size: 14px; line-height: 32px; color: #CCBFBDFC; letter-spacing: 0.31px; box-sizing: border-box; text-align: center;">
                   ${title}
               </span>
            </td>
        </tr>
    </tbody>
</table>
<table border="0" cellpadding="0" cellspacing="0" style="padding: 0 15px; width: 600px; max-width: 600px; background: #FFFFFF; box-sizing: border-box;">
    <tbody>
        <tr>
            <td style="box-sizing: border-box; padding: 55px 0 0; font-family: Arial, sans-serif; color: #080808; font-size: 18px; line-height: 25px; letter-spacing: 0.34px; text-align: center;" valign="center" align="center">
                <span style="max-width: 327px; display: block; margin: 0 auto;">${content}</span>
            </td>
        </tr>
        ${link
        ? `
        <tr>
            <td style="box-sizing: border-box; width: 100%; padding: 50px 0 0;" align="center" valign="center">
                <span style="display: inline-block; height: 11px; width: 35px; box-sizing: border-box;">
                    <img src="cid:clouds" border="0" width="37" height="21">
                </span>
                <span style="font-family: Arial, sans-serif; color: #3f71f7; font-size: 13px; line-height: 15px; letter-spacing: 0.52px; text-align: center; padding-right: 35px;">
                    <a href="${link}" style="color: #3f71f7; text-decoration: underline;">${clickHere[lang]}</a>
                </span>
            </td>
        </tr>
        `
        : ''
}
    </tbody>
</table>
<table border="0" cellpadding="0" cellspacing="0" style="padding: 0 15px; width: 600px; max-width: 600px; box-sizing: border-box; position: relative; background: #FFFFFF;">
    <tbody>
    <tr>
        <td style="padding: 120px 0 1px; box-sizing: border-box;" valign="center" align="center">
            <span style="display: block; height: 1px; width: 133px; background: #E3B1A7FC; margin: 0 auto 9px;"></span>
            <a href="${domain}" target="_blank" style="font-family: Arial, sans-serif; color: #CCBFBDFC; font-size: 14px; line-height: 22px; letter-spacing: 0.31px; text-align: center; text-decoration: none;">
                ${media[lang]}
            </a>
        </td>
    </tr>
    <tr>
        <td style="padding: 0 0 8px; box-sizing: border-box;" valign="center" align="center">
            <span style="font-family: Arial, sans-serif; color: #CCBFBDFC; font-size: 14px; line-height: 22px; letter-spacing: 0.31px; text-align: center; max-width: 233px; display: block;">
                100 Wilshire Blvd., Suite 700<br>Santa Monica, Ca 90401
            </span>
        </td>
    </tr>
    <tr>
        <td style="padding: 0; box-sizing: border-box;" valign="center" align="center">
            <a href="mailto:world@newsancai.com" target="_blank" style="font-family: Arial, sans-serif; color: #CCBFBDFC; font-size: 14px; line-height: 22px; letter-spacing: 0.31px; text-align: center; text-decoration: none;">
                 world@newsancai.com
            </a>
        </td>
    </tr>
    <tr>
        <td style="padding: 0 0 30px; box-sizing: border-box;" valign="center" align="center">
            <a href="${domain}" target="_blank" style="font-family: Arial, sans-serif; color: #CCBFBDFC; font-size: 14px; line-height: 22px; letter-spacing: 0.31px; text-align: center; text-decoration: none;">
                 www.newsancai.com
            </a>
       </td>
    </tr>
    </tbody>
</table>
</body>
</html>`;
}

export function getEmailTemplateSimple ({ domain, title, content, lang = 'en' }) {
    return `
    <!DOCTYPE html>
<html lang=${lang}>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <style>
        body{margin: 0;padding: 0;}
        img{display: block;}
        table{padding: 0;margin: 0;}
        a{color: inherit; text-decoration: none; font-family: inherit; line-height: inherit; -webkit-text-size-adjust: none; cursor: pointer;}
    </style>
</head>
<body>
<table border="0" cellpadding="0" cellspacing="0" style="padding: 0 15px; width: 600px; max-width: 600px; background: #FFFFFF; box-sizing: border-box;">
    <tbody>
        <tr style="padding: 92px 0 2px; height: 127px;">
            <td style="box-sizing: border-box;" valign="bottom" align="center">
                <a href="${domain}" target="_blank" style="height: 35px; width: 111px; display: block; box-sizing: border-box">
                    <img src="cid:logo" border="0" width="111" height="35">
                </a>
            </td>
        </tr>
         <tr style="padding: 0;">
            <td style="box-sizing: border-box;" valign="center" align="center">
               <span style="font-family: Arial, sans-serif; font-size: 14px; line-height: 32px; color: #CCBFBDFC; letter-spacing: 0.31px; box-sizing: border-box; text-align: center;">
                   ${title}
               </span>
            </td>
        </tr>
    </tbody>
</table>
<table border="0" cellpadding="0" cellspacing="0" style="padding: 0 15px; width: 600px; max-width: 600px; background: #FFFFFF; box-sizing: border-box;">
    <tbody>
        <tr>
            <td style="box-sizing: border-box; padding: 55px 0 0; font-family: Arial, sans-serif; color: #080808; font-size: 18px; line-height: 25px; letter-spacing: 0.34px; text-align: center;" valign="center" align="center">
                <span style="max-width: 327px; display: block; margin: 0 auto;">${content}</span>
            </td>
        </tr>
    </tbody>
</table>
<table border="0" cellpadding="0" cellspacing="0" style="padding: 0 15px; width: 600px; max-width: 600px; box-sizing: border-box; position: relative; background: #FFFFFF;">
    <tbody>
    <tr>
        <td style="padding: 120px 0 1px; box-sizing: border-box;" valign="center" align="center">
            <span style="display: block; height: 1px; width: 133px; background: #E3B1A7FC; margin: 0 auto 9px;"></span>
            <a href="${domain}" target="_blank" style="font-family: Arial, sans-serif; color: #CCBFBDFC; font-size: 14px; line-height: 22px; letter-spacing: 0.31px; text-align: center; text-decoration: none;">
                ${media[lang]}
            </a>
        </td>
    </tr>
    <tr>
        <td style="padding: 0 0 8px; box-sizing: border-box;" valign="center" align="center">
            <span style="font-family: Arial, sans-serif; color: #CCBFBDFC; font-size: 14px; line-height: 22px; letter-spacing: 0.31px; text-align: center; max-width: 233px; display: block;">
                100 Wilshire Blvd., Suite 700<br>Santa Monica, Ca 90401
            </span>
        </td>
    </tr>
    <tr>
        <td style="padding: 0; box-sizing: border-box;" valign="center" align="center">
            <a href="mailto:world@newsancai.com" target="_blank" style="font-family: Arial, sans-serif; color: #CCBFBDFC; font-size: 14px; line-height: 22px; letter-spacing: 0.31px; text-align: center; text-decoration: none;">
                 world@newsancai.com
            </a>
        </td>
    </tr>
    <tr>
        <td style="padding: 0 0 30px; box-sizing: border-box;" valign="center" align="center">
            <a href="${domain}" target="_blank" style="font-family: Arial, sans-serif; color: #CCBFBDFC; font-size: 14px; line-height: 22px; letter-spacing: 0.31px; text-align: center; text-decoration: none;">
                 www.newsancai.com
            </a>
       </td>
    </tr>
    </tbody>
</table>
</body>
</html>`;
}

export function getEmailTemplateVote ({ domain, title, texts, lang = 'en', options, link, leftTime }) {
    return `
    <!DOCTYPE html>
<html lang=${lang}>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;700&display=swap" rel="stylesheet"/>
    <!--<![endif]-->
    <style>
        body{margin: 0;padding: 0;}
        img{display: block;}
        table{padding: 0;margin: 0;}
        a{color: inherit; text-decoration: none; font-family: inherit; line-height: inherit; -webkit-text-size-adjust: none; cursor: pointer;}
    </style>
    <!--[if mso]>
    <style>
        * {
            font-family: Arial, sans-serif !important;
        }
    </style>
    <![endif]-->
</head>
<body>
<table border="0" cellpadding="0" cellspacing="0" style="padding: 0 15px; width: 600px; max-width: 600px; background: #FFFFFF; box-sizing: border-box;">
    <tbody>
        <tr style="padding: 92px 0 2px; height: 127px;">
            <td style="box-sizing: border-box;" valign="bottom" align="center">
                <a href="${domain}" target="_blank" style="height: 35px; width: 111px; display: block; box-sizing: border-box">
                    <img src="cid:logo" border="0" width="111" height="35">
                </a>
            </td>
        </tr>
         <tr style="padding: 0;">
            <td style="box-sizing: border-box;" valign="center" align="center">
               <span style="font-family: Arial, sans-serif; font-size: 14px; line-height: 32px; color: #CCBFBDFC; letter-spacing: 0.31px; box-sizing: border-box; text-align: center;">
                   ${title}
               </span>
            </td>
        </tr>
    </tbody>
</table>
<table border="0" cellpadding="0" cellspacing="0" style="padding: 0 15px; width: 600px; max-width: 600px; background: #FFFFFF; box-sizing: border-box;">
    <tbody>
        <tr>
            <td style="box-sizing: border-box; padding: 45px 0 7px; font-family: 'LiSu', 'Noto Serif TC', Arial, sans-serif; color: #E5590F; font-size: 22px; line-height: 25px; letter-spacing: 1.12px; text-align: left;" valign="center" align="center">
                <span style="max-width: 327px; display: block; margin: 0 auto;">${texts.header}</span>
            </td>
        </tr>
        <tr>
            <td style="box-sizing: border-box; padding: 0 0 10px; font-family: 'Noto Serif TC', Arial, sans-serif; color: #080808; font-size: 25px; line-height: 25px; letter-spacing: 1.17px; text-align: left; font-weight: 700;" valign="center" align="center">
                <span style="max-width: 327px; display: block; margin: 0 auto;">${texts.title}</span>
            </td>
        </tr>
        <tr>
            <td style="box-sizing: border-box; padding: 0 0 62px; font-family: 'LiSu', 'Noto Serif TC', Arial, sans-serif; color: #918282; font-size: 23px; line-height: 25px; letter-spacing: 1.14px; text-align: left;" valign="center" align="center">
                <span style="max-width: 327px; display: block; margin: 0 auto;">${texts.result}</span>
            </td>
        </tr>
        ${options.map((option, i) => (
        `<tr key={i}>
            <td style="box-sizing: border-box; padding: 0 0 17px;" valign="center" align="center">
                <span style="max-width: 327px; width: 100%; display: block; margin: 0 auto; text-align: left;">
                    <span style="width: 56%; display: inline-block;">
                        <span style="display: block; font-family: Arial, sans-serif; color: ${option.selected ? '#3F71F7' : '#393333'}; font-size: 21px; line-height: 26px; letter-spacing: 0px; font-weight: 700;">${option.title}</span>
                        <span style="display: block; width: ${option.percent}; height: 8px; background: ${option.selected ? '#3F71F7' : '#393333'};"></span>
                    </span>
                    <span style="width: 44%;">
                        <span style="padding: 0 0 0 28px; font-family: Arial, sans-serif; color: #443F3D; font-size: 23px; line-height: 28px; letter-spacing: 0px; font-weight: 700;">${option.percent}</span>
                        <span style="display: block; height: 8px;"></span>
                    </span>
                </span>
            </td>
        </tr>`
    )).join('')}
         <tr>
            <td style="box-sizing: border-box; padding: 122px 0 17px; font-family: Arial, sans-serif; color: #583211; font-size: 22px; line-height: 25px; letter-spacing: 0.42px; text-align: center; font-weight: 700;" valign="center" align="center">
                <span style="max-width: 327px; display: block; margin: 0 auto;">${leftTime}</span>
            </td>
        </tr>
         <tr>
            <td style="box-sizing: border-box; padding: 0 0 0; font-family: Arial, sans-serif; color: #3F71F7; font-size: 23px; line-height: 25px; letter-spacing: 0.42px; text-align: center;" valign="center" align="center">
                <span style="max-width: 327px; display: block; margin: 0 auto;">
                    <a href="${link}" target="_blank" style="text-decoration: none; color: #3F71F7;">
                        ${spreadThis[lang]}
                    </a>
                </span>
            </td>
        </tr>
    </tbody>
</table>
<table border="0" cellpadding="0" cellspacing="0" style="padding: 0 15px; width: 600px; max-width: 600px; box-sizing: border-box; position: relative; background: #FFFFFF;">
    <tbody>
    <tr>
        <td style="padding: 68px 0 1px; box-sizing: border-box;" valign="center" align="center">
            <span style="display: block; height: 1px; width: 133px; background: #E3B1A7FC; margin: 0 auto 9px;"></span>
            <a href="${domain}" target="_blank" style="font-family: Arial, sans-serif; color: #CCBFBDFC; font-size: 14px; line-height: 22px; letter-spacing: 0.31px; text-align: center; text-decoration: none;">
                ${media[lang]}
            </a>
        </td>
    </tr>
    <tr>
        <td style="padding: 0 0 8px; box-sizing: border-box;" valign="center" align="center">
            <span style="font-family: Arial, sans-serif; color: #CCBFBDFC; font-size: 14px; line-height: 22px; letter-spacing: 0.31px; text-align: center; max-width: 233px; display: block;">
                100 Wilshire Blvd., Suite 700<br>Santa Monica, Ca 90401
            </span>
        </td>
    </tr>
    <tr>
        <td style="padding: 0; box-sizing: border-box;" valign="center" align="center">
            <a href="mailto:world@newsancai.com" target="_blank" style="font-family: Arial, sans-serif; color: #CCBFBDFC; font-size: 14px; line-height: 22px; letter-spacing: 0.31px; text-align: center; text-decoration: none;">
                 world@newsancai.com
            </a>
        </td>
    </tr>
    <tr>
        <td style="padding: 0 0 30px; box-sizing: border-box;" valign="center" align="center">
            <a href="${domain}" target="_blank" style="font-family: Arial, sans-serif; color: #CCBFBDFC; font-size: 14px; line-height: 22px; letter-spacing: 0.31px; text-align: center; text-decoration: none;">
                 www.newsancai.com
            </a>
       </td>
    </tr>
    </tbody>
</table>
</body>
</html>`;
}

export function getEmailTemplateVoteResult ({ domain, title, texts, lang = 'en', options }) {
    return `
    <!DOCTYPE html>
<html lang=${lang}>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;700&display=swap" rel="stylesheet"/>
    <!--<![endif]-->
    <style>
        body{margin: 0;padding: 0;}
        img{display: block;}
        table{padding: 0;margin: 0;}
        a{color: inherit; text-decoration: none; font-family: inherit; line-height: inherit; -webkit-text-size-adjust: none; cursor: pointer;}
    </style>
    <!--[if mso]>
    <style>
        * {
            font-family: Arial, sans-serif !important;
        }
    </style>
    <![endif]-->
</head>
<body>
<table border="0" cellpadding="0" cellspacing="0" style="padding: 0 15px; width: 600px; max-width: 600px; background: #FFFFFF; box-sizing: border-box;">
    <tbody>
        <tr style="padding: 92px 0 2px; height: 127px;">
            <td style="box-sizing: border-box;" valign="bottom" align="center">
                <a href="${domain}" target="_blank" style="height: 35px; width: 111px; display: block; box-sizing: border-box">
                    <img src="cid:logo" border="0" width="111" height="35">
                </a>
            </td>
        </tr>
         <tr style="padding: 0;">
            <td style="box-sizing: border-box;" valign="center" align="center">
               <span style="font-family: Arial, sans-serif; font-size: 14px; line-height: 32px; color: #CCBFBDFC; letter-spacing: 0.31px; box-sizing: border-box; text-align: center;">
                   ${title}
               </span>
            </td>
        </tr>
    </tbody>
</table>
<table border="0" cellpadding="0" cellspacing="0" style="padding: 0 15px; width: 600px; max-width: 600px; background: #FFFFFF; box-sizing: border-box;">
    <tbody>
        <tr>
            <td style="box-sizing: border-box; padding: 54px 0 12px; font-family: 'Noto Serif TC', Arial, sans-serif; color: #3F71F7; font-size: 25px; line-height: 25px; letter-spacing: 1.12px; text-align: center;" valign="center" align="center">
                <span style="max-width: 327px; display: block; margin: 0 auto;">${texts.header}</span>
            </td>
        </tr>
        <tr>
            <td style="box-sizing: border-box; padding: 0 0 4px; font-family: 'Noto Serif TC', Arial, sans-serif; color: #080808; font-size: 25px; line-height: 25px; letter-spacing: 1.17px; text-align: center; font-weight: 700;" valign="center" align="center">
                <span style="max-width: 327px; display: block; margin: 0 auto;">${texts.title}</span>
            </td>
        </tr>
        <tr>
            <td style="box-sizing: border-box; padding: 54px 0 16px; font-family: Arial, sans-serif; color: #393333; font-size: 22px; line-height: 25px; letter-spacing: 1.12px; text-align: center;" valign="center" align="center">
                <span style="max-width: 327px; display: block; margin: 0 auto;">${texts.tickets}</span>
            </td>
        </tr>
         <tr>
            <td style="box-sizing: border-box; padding: 0 0 50px; font-family: Arial, sans-serif; color: #393333; font-size: 22px; line-height: 25px; letter-spacing: 1.12px; text-align: center;" valign="center" align="center">
                <span style="max-width: 327px; display: block; margin: 0 auto;">${texts.period}</span>
            </td>
        </tr>
        ${options.map((option, i) => (
        `<tr key={i}>
            <td style="box-sizing: border-box; padding: 0 0 17px;" valign="center" align="center">
                <span style="max-width: 327px; width: 100%; display: block; margin: 0 auto; text-align: left;">
                    <span style="width: 56%; display: inline-block;">
                        <span style="display: block; font-family: Arial, sans-serif; color: ${option.selected ? '#3F71F7' : '#393333'}; font-size: 21px; line-height: 26px; letter-spacing: 0px; font-weight: 700;">${option.title}</span>
                        <span style="display: block; width: ${option.percent}; height: 8px; background: ${option.selected ? '#3F71F7' : '#393333'};"></span>
                    </span>
                    <span style="width: 44%;">
                        <span style="padding: 0 0 0 28px; font-family: Arial, sans-serif; color: #443F3D; font-size: 23px; line-height: 28px; letter-spacing: 0px; font-weight: 700;">${option.percent}</span>
                        <span style="display: block; height: 8px;"></span>
                    </span>
                </span>
            </td>
        </tr>`
    )).join('')}
         <tr>
            <td style="box-sizing: border-box; padding: 124px 0 0px; font-family: 'Noto Serif TC', Arial, sans-serif; color: #E5590F; font-size: 22px; line-height: 25px; letter-spacing: 1.12px; text-align: center; font-weight: 700;" valign="center" align="center">
                <span style="max-width: 327px; display: block; margin: 0 auto;">${texts.thanks}</span>
            </td>
        </tr>
    </tbody>
</table>
<table border="0" cellpadding="0" cellspacing="0" style="padding: 0 15px; width: 600px; max-width: 600px; box-sizing: border-box; position: relative; background: #FFFFFF;">
    <tbody>
    <tr>
        <td style="padding: 95px 0 1px; box-sizing: border-box;" valign="center" align="center">
            <span style="display: block; height: 1px; width: 133px; background: #E3B1A7FC; margin: 0 auto 9px;"></span>
            <a href="${domain}" target="_blank" style="font-family: Arial, sans-serif; color: #CCBFBDFC; font-size: 14px; line-height: 22px; letter-spacing: 0.31px; text-align: center; text-decoration: none;">
                ${media[lang]}
            </a>
        </td>
    </tr>
    <tr>
        <td style="padding: 0 0 8px; box-sizing: border-box;" valign="center" align="center">
            <span style="font-family: Arial, sans-serif; color: #CCBFBDFC; font-size: 14px; line-height: 22px; letter-spacing: 0.31px; text-align: center; max-width: 233px; display: block;">
                100 Wilshire Blvd., Suite 700<br>Santa Monica, Ca 90401
            </span>
        </td>
    </tr>
    <tr>
        <td style="padding: 0; box-sizing: border-box;" valign="center" align="center">
            <a href="mailto:world@newsancai.com" target="_blank" style="font-family: Arial, sans-serif; color: #CCBFBDFC; font-size: 14px; line-height: 22px; letter-spacing: 0.31px; text-align: center; text-decoration: none;">
                 world@newsancai.com
            </a>
        </td>
    </tr>
    <tr>
        <td style="padding: 0 0 30px; box-sizing: border-box;" valign="center" align="center">
            <a href="${domain}" target="_blank" style="font-family: Arial, sans-serif; color: #CCBFBDFC; font-size: 14px; line-height: 22px; letter-spacing: 0.31px; text-align: center; text-decoration: none;">
                 www.newsancai.com
            </a>
       </td>
    </tr>
    </tbody>
</table>
</body>
</html>`;
}
