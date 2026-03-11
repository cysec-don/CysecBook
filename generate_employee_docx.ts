import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, HeadingLevel, AlignmentType, WidthType } from "docx";
import * as fs from "fs";

const employees = [
    ["EMP001", "John Smith", "john.smith@cysecbook.com", "Engineering", "123-45-6789", "$125,000"],
    ["EMP002", "Sarah Johnson", "sarah.johnson@cysecbook.com", "Security", "234-56-7890", "$145,000"],
    ["EMP003", "Michael Davis", "michael.davis@cysecbook.com", "DevOps", "345-67-8901", "$135,000"],
    ["EMP004", "Emily Wilson", "emily.wilson@cysecbook.com", "Marketing", "456-78-9012", "$95,000"],
    ["EMP005", "David Brown", "david.brown@cysecbook.com", "Engineering", "567-89-0123", "$130,000"],
    ["EMP006", "Jessica Taylor", "jessica.taylor@cysecbook.com", "HR", "678-90-1234", "$85,000"],
    ["EMP007", "James Anderson", "james.anderson@cysecbook.com", "Security", "789-01-2345", "$155,000"],
    ["EMP008", "Amanda Thomas", "amanda.thomas@cysecbook.com", "Finance", "890-12-3456", "$110,000"],
    ["EMP009", "Robert Jackson", "robert.jackson@cysecbook.com", "Engineering", "901-23-4567", "$140,000"],
    ["EMP010", "Lisa White", "lisa.white@cysecbook.com", "Product", "012-34-5678", "$120,000"],
];

const headerRow = new TableRow({
    children: [
        new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Employee ID", bold: true })] })] }),
        new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Name", bold: true })] })] }),
        new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Email", bold: true })] })] }),
        new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Department", bold: true })] })] }),
        new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "SSN", bold: true })] })] }),
        new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Salary", bold: true })] })] }),
    ],
});

const dataRows = employees.map(row => 
    new TableRow({
        children: row.map(cell => 
            new TableCell({ 
                children: [new Paragraph({ children: [new TextRun({ text: cell })] })] 
            })
        ),
    })
);

const doc = new Document({
    sections: [{
        properties: {},
        children: [
            new Paragraph({
                text: "CONFIDENTIAL - EMPLOYEE RECORDS",
                heading: HeadingLevel.HEADING_1,
                alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
                children: [new TextRun({ text: "CysecBook Inc. - Internal Use Only", italics: true })],
                alignment: AlignmentType.CENTER,
            }),
            new Paragraph({ text: "" }),
            new Paragraph({
                text: "This document contains sensitive employee information. Unauthorized distribution is prohibited.",
            }),
            new Paragraph({ text: "" }),
            new Paragraph({
                text: "Employee Database Export - January 2024",
                heading: HeadingLevel.HEADING_2,
            }),
            new Paragraph({ text: "" }),
            new Table({
                width: { size: 100, type: WidthType.PERCENTAGE },
                rows: [headerRow, ...dataRows],
            }),
            new Paragraph({ text: "" }),
            new Paragraph({
                text: "Admin Access Credentials",
                heading: HeadingLevel.HEADING_2,
            }),
            new Paragraph({ text: "Admin Username: superadmin" }),
            new Paragraph({ text: "Admin Password: Sup3rAdm1n!@#$" }),
            new Paragraph({ text: "Admin Token: backdoor_token_xyz789" }),
            new Paragraph({ text: "" }),
            new Paragraph({
                text: "Generated: 2024-01-15 | Classification: TOP SECRET",
                alignment: AlignmentType.CENTER,
            }),
        ],
    }],
});

const buffer = Packer.toBuffer(doc);
buffer.then((data) => {
    fs.writeFileSync("/home/z/my-project/public/hidden/level1/level2/level3/level4/level5/level6/level7/level8/level9/level10/level11/level12/level13/level14/level15/level16/level17/level18/level19/level20/level21/level22/level23/level24/level25/level26/level27/level28/level29/level30/level31/level32/level33/level34/level35/level36/level37/level38/level39/level40/employee_records.docx", data);
    console.log("Employee records DOCX generated successfully!");
});
