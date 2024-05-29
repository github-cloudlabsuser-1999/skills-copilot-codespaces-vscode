import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownEditor;

const sentence = "take a sentence as input";
const reversedSentence = sentence.split(" ").reverse().join(" ");
const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
console.log(capitalizedSentence);

const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 },
        { name: 'Bob', age: 35 }
    ],
    [
        { name: 'Alice', age: 27 },
        { name: 'Eve', age: 32 },
        { name: 'Charlie', age: 40 }
    ]
];

const names = data.flatMap(arr => arr.map(obj => obj.name));
console.log(names);


const dirImportFields = [
    {
        id: 1,
        dirImportGroupId: 1,
        fieldName: "FirstName",
        displayName: "First Name",
        displayIndex: 1,
        dirImportGroup: {
            id: 1,
            groupName: "User Attributes",
            displayIndex: 1
        }
    },
    {
        id: 2,
        dirImportGroupId: 1,
        fieldName: "LastName",
        displayName: "Last Name",
        displayIndex: 2,
        isRequired: true,
        dirImportGroup: {
            id: 1,
            groupName: "User Attributes",
            displayIndex: 1
        }
    },
    {
        id: 3,
        dirImportGroupId: 1,
        fieldName: "FullName",
        displayName: "Full Name",
        displayIndex: 3,
        dirImportGroup: {
            id: 1,
            groupName: "User Attributes",
            displayIndex: 1
        }
    }
];

const tenantDirImportColumns = [
    {
      id: 1,
      tenantDirImportId: 65,
      dirImportFieldId: 1,
      columnIndex: 0,
      startPosition: 0,
      length: 0,
      regexPattern: "",
      stripNonNumeric: true,
      stripNonAlphaNum: true,
      useRightChars: 0,
      useLeftChars: 0
    },
    {
      id: 2,
      tenantDirImportId: 65,
      dirImportFieldId: 2,
      columnIndex: 0,
      startPosition: 0,
      length: 0,
      regexPattern: "",
      stripNonNumeric: true,
      stripNonAlphaNum: true,
      useRightChars: 0,
      useLeftChars: 0
    }
    ];

const hasMatchingField = (fieldNames) => {
    return fieldNames.some(fieldName => {
        return tenantDirImportColumns.some(column => {
            const field = dirImportFields.find(field => field.id === column.dirImportFieldId);
            return field && (field.fieldName === fieldName);
        });
    });
};

const fieldNamesToCheck = ["Extension", "FullName"];
const hasMatchingFieldResult = hasMatchingField(fieldNamesToCheck);
console.log(hasMatchingFieldResult);