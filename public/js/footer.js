{
    document.getElementById('student').addEventListener('click', handleEvent);
    document.getElementById('notice').addEventListener('click', handleEvent);
    document.getElementById('teacher').addEventListener('click', handleEvent);
    document.getElementById('documents').addEventListener('click', handleEvent);
    document.getElementById('admin').addEventListener('click', handleEvent);
    generateHomePage('student')

    function handleEvent(event){
        generateHomePage(event.target.id)
    }


    function generateHomePage(id){
        let container = document.getElementById('quickOptions');
        container.innerHTML=``
        let host='http://localhost:3000'
        let data = {
            student:{
                count:3,
                images:['registration.png','fees.png','result.png'],
                links:['/registration', '/fees', '/result'],
                keys:['Registration','Fees','Result']
            },
            teacher:{
                count:2,
                images:['showTeachers.png','attendance.png'],
                links:['/teachers','/attendance'],
                keys:['Show Teachers','Attendance']
            },
            documents:{
                count:2,
                images:['oldDocs.png','Alumini.png'],
                links:['/','/'],
                keys:['Old Documents','Old Students']
            },
            admin:{
                count:5,
                images:['annualFees.png','approval.png','termination.png','upgrade.png','addUser.png'],
                links:['/annualFees','/addmissions/approval','/discharge','/class/annualupgrade','/add_user'],
                keys:['Annual Fees','Approval', 'Discharge', 'Upgrade Class', 'Add User']
            }
        }
        if(true){
            for(let i=0;i<data[id].count;i++){
                let item = document.createElement('div');
                item.classList.add('cardItem');
                item.innerHTML=
                `
                <a href="${host}${data[id].links[i]}">
                <div>
                    <img src="/images/${data[id].images[i]}" alt="" srcset="" height="100%", width="100%">
                </div>
                <label for="" style="text-align: center;">${data[id].keys[i]}</label>
                </a>
                `
                container.appendChild(item)
            }
        }
    }
}