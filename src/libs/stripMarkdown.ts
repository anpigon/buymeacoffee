const remark = require('remark');
const strip = require('strip-markdown');

export function stripMarkdown(markdown: string) {
  return new Promise((resolve, reject) => {
    remark()
      .use(strip)
      .process(markdown, function (err: any, file: any) {
        if (err) return reject(err);
        resolve(String(file));
      });
  });
}
