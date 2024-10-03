"use client";

import style from "./VSCode.module.css";
import appcontent from "../../AppContent.module.css";
import "./CodeHighLight.css";
import { ImFilesEmpty } from "react-icons/im";
import { VscSearch } from "react-icons/vsc";
import { IoExtensionPuzzleOutline, IoSettingsOutline } from "react-icons/io5";
import Highlight from "react-highlight";
import { motion } from "framer-motion";
import { RiFileTextFill, RiJavascriptFill } from "react-icons/ri";
import { FaNpm } from "react-icons/fa";

function VSCode() {
  const codeString = [
    { line: "const Hypnose = 'OMG! This app is amazing!!!'" },
    { line: "" },
    { line: "const express = require('express');" },
    { line: "const app = express();" },
    { line: "const bodyParser = require('body-parser');" },
    { line: "app.use(bodyParser.json());" },
    { line: "app.use(bodyParser.urlencoded({ extended: true }));" },
    { line: "app.get('/api/data', (req, res) => {" },
    { line: "  // This endpoint handles GET requests to fetch data." },
    { line: "  res.json({ message: 'Hello World!', timestamp: new Date() });" },
    { line: "});" },
    { line: "" },
    { line: "app.post('/api/data', (req, res) => {" },
    { line: "  // This endpoint handles POST requests to receive data." },
    { line: "  const data = req.body;" },
    { line: "  // Log the received data for debugging purposes." },
    { line: "  console.log('Received data:', data);" },
    { line: "  res.status(201).send({ status: 'success', data: data });" },
    { line: "});" },
    { line: "" },
    { line: "const PORT = process.env.PORT || 3000;" },
    { line: "app.listen(PORT, () => {" },
    { line: "  // Server starts listening on the specified port." },
    {
      line: "  console.log(`Server is running on port ${PORT}. Ready to accept requests!`);",
    },
    { line: "});" },
    { line: "" },
    { line: "app.get('/api/health', (req, res) => {" },
    { line: "  // This endpoint checks the health of the server." },
    { line: "  res.json({ status: 'OK' });" },
    { line: "});" },
    { line: "" },
    { line: "app.use((req, res) => {" },
    { line: "  // Handle 404 errors." },
    { line: "  res.status(404).send({ error: 'Not Found' });" },
    { line: "});" },
    { line: "" },
    { line: "module.exports = app;" },
    { line: "" },
    { line: "return Hypnose;" },
    { line: "" },
    { line: "[EOF]" },
  ];

  return (
    <div className={`${appcontent["app-content"]} ${style.vscode} row`}>
      <div className={`${style.leftbar} column aic jcsb`}>
        <div className='column aic w100 maxContentH'>
          <button className='row aic jcc'>
            <ImFilesEmpty size={20} color='black' />
          </button>
          <button className='row aic jcc'>
            <VscSearch size={20} color='#505050' />
          </button>
          <button className='row aic jcc'>
            <IoExtensionPuzzleOutline size={20} color='#505050' />
          </button>
        </div>

        <div className='column w100 maxContentH'>
          <button className='row aic jcc'>
            <IoSettingsOutline size={20} color='#505050' />
          </button>
        </div>
      </div>
      <div className={`${style["code-area"]} column jcfs`}>
        <div className={`${style.tabs} row aic`}>
          <button className={`${style.tab} ${style.active} row aic gap5`}>
            <RiJavascriptFill size={18} color='#e0af68' />
            <span>script.js</span>×
          </button>
          <button className={`${style.tab} row aic gap5`}>
            <RiFileTextFill size={18} color='#656565' />
            <span>README.md</span>
          </button>
          <button className={`${style.tab} row aic gap5`}>
            <FaNpm size={18} color='#c83a3d' />
            <span>package.json</span>
          </button>
        </div>
        {codeString.map((lineObj, index) => (
          <motion.code
            key={index * 1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.15 }}
            className='row aic'
          >
            <span className={`${style.rowCounter} row aic jcfe`}>
              {lineObj.line.toString() != "[EOF]" && index + 1}
            </span>
            <Highlight className='javascript'>
              <span>{lineObj.line}</span>
            </Highlight>
          </motion.code>
        ))}
      </div>
    </div>
  );
}

export default VSCode;
