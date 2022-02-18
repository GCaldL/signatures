from csv import reader
import email

open('all.html', 'w').close()

with open('staff2.csv', 'r') as read_obj:
    stafflist = reader(read_obj)
    for row in stafflist:
        name = row[1]
        phone = row[3]
        mail = row[4]

        if (row[0] != ""):
            position = row[0] + ' ' + row[2]
        else:
            position = row[2]
        print(name + '       pos: ' + position +'      ph: ' + phone +'      email: '+ mail)

        #so now we have vars for each we open the template files and
        with open('new/phone.html', 'r') as file :
            tphone = file.read()
        tphone = tphone.replace('@@@phone', phone)

        with open('new/mobile.html', 'r') as file :
            tmobile = file.read()
            tmobile = tmobile.replace('@@@phone', phone)

        with open('new/email.html', 'r') as file :
            temail = file.read()
            temail = temail.replace('@@@email', mail)
            
        
        with open('new/site.html', 'r') as file :
            tsite = file.read()

        with open('new/address.html', 'r') as file :
            taddress = file.read()

        with open('new/base.html', 'r') as file :
            base = file.read()

        base = base.replace('@@@name', name)
        base = base.replace('@@@role', position)

        base = base.replace('@@@phone', tphone)
        base = base.replace('@@@mobile', '')
        base = base.replace('@@@email', temail)
        base = base.replace('@@@site', tsite)
        base = base.replace('@@@address', taddress)
        
        with open('out/'+name+'.html', 'w') as file:
            file.write(base)
        with open('all.html', 'a') as file:
            file.write(base)