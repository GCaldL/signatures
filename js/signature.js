let template =
{
    base: "<html> \
    <body style=\'font-family:Roboto,RobotoDraft,Helvetica,Arial,sans-serif;\'> \
        <table style=\'width: 600px;\'><tr> \
            <td style=\'width: 25%;\'> \
                <img src=\'https://www.faithcsde.com/img/logos/faithlogo-sm.png\' style=\'width: 90%; margin-left: 10%;\'> \
            </td> \
            <td style=\'width: 100%; padding-left: 20px;\'> \
                <p><strong>@@@name | @@@role</strong><br> \
                <strong style=\'color:rgb(153,153,153);font-size:small;\'>Faith Christian School of Distance Education</strong></p> \
                <div style=\'border-top: 2px solid #45668E;\'></div> \
                <p style=\'color: #6696d1; line-height: 25px;\'> \
                    @@@phone \
                    @@@mobile \
                    @@@email \
                    @@@site \
                    @@@address \
                </p><span style=\'color:rgb(128,128,128); font-size:10px;\'> \
                    The contents of this email and any attachments are confidential. They are intended for the named recipient(s) only. If you have received this email by mistake, please notify the sender immediately and do not disclose the contents to anyone or make copies thereof.\
                    <span style=\'color:rgb(241, 241, 241);\'>Oh, Hi Mark!</span> \
                </span> \
            </td> \
        </tr></table> \
        <br> \
        <br> \
    </body> \
    </html>",
    phone: "<span style=\'display:inline-block\'> \
    <img style=\'margin-bottom: -5px;\' src=\'https://www.faithcsde.com/storage/uploaded_files/signature/phone.png\'/>\
    <a style=\'color: #45668E;\' href=\'tel:@@@temp\'>@@@temp</a>\
    </span>\
    <strong>|</strong>",
    mobile: "<span style=\'display:inline-block\'> \
    <img style=\'margin-bottom: -5px;\' src=\'https://www.faithcsde.com/storage/uploaded_files/signature/phone.png\'/>\
    <a style=\'color: #45668E;\' href=\'tel:@@@temp\'>@@@temp</a>\
    </span>\
    <strong>|</strong>",
    email: "<span style=\'display:inline-block\'> \
    <img style=\'margin-bottom: -5px;\' src=\'https://www.faithcsde.com/storage/uploaded_files/signature/email.png\'/> \
    <a style=\'color: #45668E;\' href=\'@@@temp\'>@@@temp</a> \
    </span>",
    site: "<span style=\'display:inline-block\'> \
    <img style=\'margin-bottom: -5px;\' src=\'https://www.faithcsde.com/storage/uploaded_files/signature/site.png\'/> \
    <a style=\'color: #45668E;\'href=\'https://www.faithcsde.com/\'>faithcsde.com</a> \
    </span> \
    <strong>|</strong>",
    address: "<span style=\'display:inline-block\'> \
    <img style=\'margin-bottom: -5px;\' src=\'https://www.faithcsde.com/storage/uploaded_files/signature/location.png\'/> \
    <a style=\'color: #45668E;\'href=\'https://www.google.com/maps?q=PO+Box+105,+Kingston+4114\'>PO Box 105, Kingston 4114</a> \
    </span>"
};


function replaceTemplateFields(temp, after){
    if (after != null){
        temp.replaceAll("@@@temp", after);
    } else {
        temp.replaceAll("@@@temp", "");
    }
    return temp;
}

function generateTemplate(name, role, phone, mobile, email, site, address) {
    phonet = replaceTemplateFields(template.phone, phone);
    mobilet = replaceTemplateFields(template.mobile, mobile);
    emailt = replaceTemplateFields(template.email, email);
    sitet = replaceTemplateFields(template.site, site);
    addresst = replaceTemplateFields(template.address, address);

    return template.base.replace("@@@name", name)
    .replace("@@@role", role)
    .replace("@@@phone", phonet)
    .replace("@@@mobile", mobilt)
    .replace("@@@email", emailt)
    .replace("@@@site", sitet)
    .replace("@@@address", addresst);
}

console.log("test")

//I can't be effed checking specific el for update, just update the freaking thing regardless :)
$("*").on('change keyup paste', function () {
    let signature = generateTemplate("Geoff", "lol k", "04", "04", "g@g.co",);
    $("#signatureGEN").replaceWith(signature);
    console.log(signature);
});