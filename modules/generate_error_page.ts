/* Generate error page */
import fs from "node:fs";
import path from "node:path";
const errors: HTTPError = JSON.parse(fs.readFileSync(path.join(__dirname, "error_response_code.json"), "utf-8"));
type HTTPError = {
    [key: string]: {
        name: string;
        message: string;
    };
};

function generateErrorPage(errorCode: number) {
    return `<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Error - ${errorCode} ${errors[String(errorCode)].name}</title><style>body,html{margin:0;padding:0}body{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:75vh;background:#f0f0f0;color:#202020}#main{display:flex;flex-direction:column;align-items:center;justify-content:center}#header{display:flex;flex-direction:row;align-items:center;justify-content:center}#icon{width:3em;height:3em;margin:.5em}#title{font-size:1.5em;margin:.5em;color:#787878}#content{font-size:1em;color:#787878}a{text-decoration:none;color:#3c3cff}</style></head><body><div id="main"><div id="header"><svg version="1.1" id="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><g><path class="st0" d="M437.014,74.978C390.77,28.696,326.608-0.014,256,0C185.393-0.014,121.222,28.696,74.977,74.978C28.696,121.222-0.015,185.392,0,256c-0.015,70.608,28.696,134.778,74.977,181.022C121.222,483.304,185.393,512.015,256,512c70.608,0.015,134.77-28.696,181.014-74.978c46.289-46.244,75-110.414,74.986-181.022C512.014,185.392,483.304,121.222,437.014,74.978z M399.474,112.526c36.763,36.799,59.414,87.355,59.43,143.474c-0.015,56.118-22.667,106.674-59.43,143.474c-36.807,36.763-87.363,59.416-143.474,59.43c-56.119-0.014-106.674-22.667-143.474-59.43C75.762,362.674,53.111,312.118,53.096,256c0.014-56.118,22.666-106.674,59.429-143.474c36.8-36.763,87.356-59.415,143.474-59.43C312.111,53.112,362.667,75.763,399.474,112.526z" style="fill:#787878"></path><path class="st0" d="M246.681,303.592c0.312,2.075,1.349,4.067,3.104,5.986c1.748,1.911,3.822,2.866,6.215,2.866c5.57,0,8.681-2.948,9.311-8.852l18.644-143.214c0.311-2.533,0.474-6.126,0.474-10.748c0-7.17-2.466-13.689-7.4-19.593c-4.94-5.889-11.948-8.837-21.029-8.837c-9.415,0-16.496,3.022-21.266,9.066c-4.778,5.904-7.171,12.356-7.171,19.364c0,4.31,0.156,7.888,0.474,10.748L246.681,303.592z" style="fill:#787878"></path><path class="st0" d="M256,390.792c8.118,0,14.962-2.778,20.548-8.362c5.57-5.563,8.356-12.422,8.356-20.541c0-8.126-2.785-14.978-8.356-20.556c-5.414-5.422-12.266-8.126-20.548-8.126c-8.118,0-14.971,2.8-20.556,8.364c-5.578,5.585-8.356,12.348-8.356,20.318c0,7.637,2.778,14.407,8.356,20.303C241.029,387.934,247.882,390.792,256,390.792z" style="fill:#787878"></path></g></svg><div id="title">${errorCode} ${errors[errorCode].name}</div></div><div id="content"><p>${errors[errorCode].message}</p><p>過去のページであれば、<a href="#!" onclick="location.href = \`https://web.archive.org/web/\${location.href}\`">Internet Archive<span style="font-size:.5em">(外部サイト)</span></a>から閲覧いただけます。</p></div></div></body></html>`;
}

export default generateErrorPage;