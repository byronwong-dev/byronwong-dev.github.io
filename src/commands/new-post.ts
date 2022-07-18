import minimist from "minimist";
import fs from 'fs';
import moment from "moment";

export default function writeMdFile() {
    const contentPath = 'src/contents';

    const args = minimist(process.argv.slice(2));

    const now = moment()
    const title = args._.map(i => i.toLocaleUpperCase())
    const filename = `${now.format('YYYYMMDD')}-${title.join("-").replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()}.md`;

    const f = fs.openSync(`${contentPath}/${filename}`, 'w')
    fs.writeSync(f, `# ${title.join(' ')}`)
    fs.close(f)
}

writeMdFile();