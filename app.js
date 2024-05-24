const fs = require("fs");
const path = require("path");
const xml2js = require("xml2js");
const dotenv = require("dotenv");

dotenv.config({
  path: path.join(__dirname, ".env")
});

const xmlPath = path.join(__dirname, process.env.PASTA_XML);
const ANO_2015 = path.join(__dirname, process.env.XML_2015_FOLDER);
const ANO_2016 = path.join(__dirname, process.env.XML_2016_FOLDER);
const ANO_2017 = path.join(__dirname, process.env.XML_2017_FOLDER);
const ANO_2018 = path.join(__dirname, process.env.XML_2018_FOLDER);
const ANO_2019 = path.join(__dirname, process.env.XML_2019_FOLDER);
const ANO_2020 = path.join(__dirname, process.env.XML_2020_FOLDER);
const ANO_2021 = path.join(__dirname, process.env.XML_2021_FOLDER);
const ANO_2022 = path.join(__dirname, process.env.XML_2022_FOLDER);
const ANO_2023 = path.join(__dirname, process.env.XML_2023_FOLDER);

const date = new Date().toLocaleString("pt-BR", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
});

async function processFile(file) {
  try {
    const xml_string = fs.readFileSync(path.join(xmlPath, file), "utf8");
    const parser = new xml2js.Parser({ ignoreAttrs: false, mergeAttrs: true });
    const result = await parser.parseStringPromise(xml_string);
    const DATA_EMISSAO = parseInt(result.nfeProc.NFe[0].infNFe[0].ide[0].dhEmi[0]);
    const yearFolder = path.join(
      __dirname,
      DATA_EMISSAO === 2015 ? ANO_2015 :
      DATA_EMISSAO === 2016 ? ANO_2016 :
      DATA_EMISSAO === 2017 ? ANO_2017 :
      DATA_EMISSAO === 2018 ? ANO_2018 :
      DATA_EMISSAO === 2019 ? ANO_2019 :
      DATA_EMISSAO === 2020 ? ANO_2020 :
      DATA_EMISSAO === 2021 ? ANO_2021 :
      DATA_EMISSAO === 2022 ? ANO_2022 :
      DATA_EMISSAO === 2023 ? ANO_2023 :
      "invalid"
    );
    if (yearFolder !== "invalid") {
      fs.copyFileSync(path.join(xmlPath, file), path.join(yearFolder, file));
      console.log(`${xmlPath}/${file}`, `${yearFolder}/${file}`);
    } else {
      console.log(`${xmlPath}/${file} is not a XML`);
    }
  } catch (err) {
    console.log(err.name);
    console.log(file);
  }
}

async function processXmlFiles() {
  const files = fs.readdirSync(xmlPath);
  for (const file of files) {
    await processFile(file);
  }
}

processXmlFiles();


