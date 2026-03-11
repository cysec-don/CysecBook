from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily

# Register fonts
pdfmetrics.registerFont(TTFont('Times New Roman', '/usr/share/fonts/truetype/english/Times-New-Roman.ttf'))
registerFontFamily('Times New Roman', normal='Times New Roman', bold='Times New Roman')

# Create document
doc = SimpleDocTemplate(
    "/home/z/my-project/public/hidden/level1/level2/level3/level4/level5/level6/level7/level8/level9/level10/level11/level12/level13/level14/level15/level16/level17/level18/level19/level20/level21/level22/level23/level24/level25/level26/level27/level28/level29/level30/level31/level32/level33/level34/level35/sensitive_data.pdf",
    pagesize=letter,
    title="CysecBook Sensitive Data",
    author="Z.ai",
    creator="Z.ai",
    subject="Confidential security credentials and API keys"
)

styles = getSampleStyleSheet()
story = []

# Title
title_style = ParagraphStyle(
    name='Title',
    fontName='Times New Roman',
    fontSize=24,
    alignment=TA_CENTER,
    spaceAfter=20
)
story.append(Paragraph("<b>CONFIDENTIAL - SENSITIVE DATA</b>", title_style))
story.append(Paragraph("CysecBook Security Credentials", title_style))
story.append(Spacer(1, 30))

# Warning
warning_style = ParagraphStyle(
    name='Warning',
    fontName='Times New Roman',
    fontSize=12,
    textColor=colors.red,
    alignment=TA_CENTER,
    spaceAfter=20
)
story.append(Paragraph("⚠️ THIS FILE CONTAINS HIGHLY SENSITIVE INFORMATION ⚠️", warning_style))
story.append(Paragraph("DO NOT SHARE - DO NOT COMMIT TO VERSION CONTROL", warning_style))
story.append(Spacer(1, 30))

# Database credentials
heading_style = ParagraphStyle(
    name='Heading',
    fontName='Times New Roman',
    fontSize=14,
    spaceAfter=10
)
body_style = ParagraphStyle(
    name='Body',
    fontName='Times New Roman',
    fontSize=10,
    spaceAfter=6
)

story.append(Paragraph("<b>Database Credentials</b>", heading_style))
story.append(Paragraph("Production Database: db.cysecbook.internal:5432", body_style))
story.append(Paragraph("Username: admin_user", body_style))
story.append(Paragraph("Password: Sup3rS3cr3tP@ssw0rd!2024", body_style))
story.append(Paragraph("Database: cysecbook_production", body_style))
story.append(Spacer(1, 20))

story.append(Paragraph("<b>Redis Configuration</b>", heading_style))
story.append(Paragraph("Host: redis.cysecbook.internal:6379", body_style))
story.append(Paragraph("Password: R3d1sS3cr3tK3y!", body_style))
story.append(Spacer(1, 20))

story.append(Paragraph("<b>API Keys</b>", heading_style))
story.append(Paragraph("Stripe: sk_live_FAKE_STRIPE_KEY_FOR_SECURITY_TESTING", body_style))
story.append(Paragraph("SendGrid: SG.xxxxxxxxxxxxxxxxxxxxxx.yyyyyyyyyyyy", body_style))
story.append(Paragraph("AWS Access Key: AKIAIOSFODNN7EXAMPLE", body_style))
story.append(Paragraph("AWS Secret Key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY", body_style))
story.append(Spacer(1, 20))

story.append(Paragraph("<b>JWT Secret</b>", heading_style))
story.append(Paragraph("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.c3VwZXJfc2VjcmV0X2tleV9mb3Jfand0", body_style))
story.append(Spacer(1, 20))

story.append(Paragraph("<b>Admin Backdoor Credentials</b>", heading_style))
story.append(Paragraph("Username: superadmin", body_style))
story.append(Paragraph("Password: Sup3rAdm1n!@#$", body_style))
story.append(Paragraph("Token: backdoor_token_xyz789", body_style))
story.append(Spacer(1, 20))

# User data table
story.append(PageBreak())
story.append(Paragraph("<b>User Database Dump (Sample)</b>", heading_style))
story.append(Spacer(1, 10))

header_style = ParagraphStyle(name='TableHeader', fontName='Times New Roman', fontSize=10, textColor=colors.white, alignment=TA_CENTER)
cell_style = ParagraphStyle(name='TableCell', fontName='Times New Roman', fontSize=9, alignment=TA_CENTER)

data = [
    [Paragraph('<b>ID</b>', header_style), Paragraph('<b>Username</b>', header_style), Paragraph('<b>Email</b>', header_style), Paragraph('<b>Password Hash</b>', header_style)],
    [Paragraph('1', cell_style), Paragraph('admin', cell_style), Paragraph('admin@cysecbook.com', cell_style), Paragraph('$2a$10$N9qo8uLO...', cell_style)],
    [Paragraph('2', cell_style), Paragraph('john.doe', cell_style), Paragraph('john@email.com', cell_style), Paragraph('$2a$10$XyZ123...', cell_style)],
    [Paragraph('3', cell_style), Paragraph('jane.smith', cell_style), Paragraph('jane@email.com', cell_style), Paragraph('$2a$10$AbC456...', cell_style)],
]

table = Table(data, colWidths=[0.5*inch, 1.5*inch, 2.5*inch, 2*inch])
table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), colors.HexColor('#1F4E79')),
    ('TEXTCOLOR', (0, 0), (-1, 0), colors.white),
    ('BACKGROUND', (0, 1), (-1, -1), colors.white),
    ('GRID', (0, 0), (-1, -1), 0.5, colors.grey),
    ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
    ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ('TOPPADDING', (0, 0), (-1, -1), 6),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
]))
story.append(table)

doc.build(story)
print("Sensitive PDF generated successfully!")
