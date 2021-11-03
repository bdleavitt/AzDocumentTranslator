# AzDocumentTranslator
A simple web app that uses the Azure Document Translator API to translate documents from a source language into one or multiple target languages. 

Version 1: 
* Front-end react-app allows user to select and upload a target file with a specified source language (or automatically selected)
* The app uploads the document to azure blob storage. The blog is tagged with the source and desitnation languages. 
* An azure function triggers on document upload and processes each of the translations with the search API. 
* Upon completion, the source file is created in the same directory as the source document, but tagged with the translation list. 
* A progress indicator shows how much progress has been made in translating documents. 

