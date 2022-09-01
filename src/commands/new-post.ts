import minimist from "minimist";
import * as fs from 'fs'
import moment from "moment";
import Yaml from 'yamljs'
import { YamlContentItem } from "../pages/types";

const toTitleCase = (str: string): string => {
    const content = str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    return content?.map(x => x.charAt(0).toUpperCase() + x.slice(1))
        .join(' ') || '';
}


export default function writeMdFile() {
    const contentPath = 'src/contents';

    const args = minimist(process.argv.slice(2));
    const now = moment()
    const title = toTitleCase(args._.join(' '))
    const slug = args._.join("-").replace(/[^a-zA-Z0-9-]/g, '').toLowerCase();
    const filename = `${now.format('YYYYMMDD')}-${slug}`;
    const datetime = now.format('YYYY-MM-DD');
    const createdAt = now.format('Do MMM YYYY');
    const isoString = now.toISOString();
    const template = `---
Author: Byron Wong
Date: ${datetime}
Slug: ${slug}
---

# ${title}
`
    const f = fs.openSync(`${contentPath}/${filename}.md`, 'w')
    fs.writeSync(f, template, 0)
    fs.close(f)

    const yamlContent = { filename, slug, title, createdAt, isoString }

    addEntryToContentYaml(yamlContent)
}

const addEntryToContentYaml = (content: YamlContentItem) => {
    const yamlObj = Yaml.load('./src/contents/index.yml')
    yamlObj.blogs[content.filename] = {
        filename: content.filename,
        slug: content.slug,
        title: content.title,
        createdAt: content.createdAt
    }
    const ymlFile = fs.openSync('./src/contents/index.yml', 'w')
    fs.writeSync(ymlFile, Yaml.stringify(yamlObj, 4, 2))
    fs.close(ymlFile)
}

writeMdFile();