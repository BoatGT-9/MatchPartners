// ข้อมูลผู้ประกอบการ
const companies = [
    {
        name: "อานนท์ กิจการรุ่งโรจน์",
        skills: ["การบริหารธุรกิจ", "การตลาดดิจิทัล"],
      },
      {
        name: "สุชาดา คำแก้ว",
        skills: ["การจัดการทรัพยากรมนุษย์", "การตลาดออนไลน์"],
      },
      {
        name: "วรชัย พันธุ์เพชร",
        skills: ["การออกแบบผลิตภัณฑ์", "การออกแบบกราฟิก"],
      },
      {
        name: "ประเสริฐ วิชัย",
        skills: ["การพัฒนาธุรกิจ", "การวิเคราะห์ข้อมูล"],
      },
      {
        name: "นภัสสร อมรชัย",
        skills: ["การวางแผนกลยุทธ์", "การบริหารโครงการ"],
      },
];

// ข้อมูลนักศึกษาฝึกงาน
const interns = [
    {
        name: "พีรพล จันทรวงศ์",
        skills: ["การเขียนโปรแกรม", "การวิเคราะห์ข้อมูล"],
      },
      {
        name: "สุกัญญา มาลินี",
        skills: ["การออกแบบกราฟิก", "การทำวิดีโอคอนเทนต์"],
      },
      {
        name: "นัทธพงศ์ ศรีวิเศษ",
        skills: ["วิศวกรรมซอฟต์แวร์", "การทำ Machine Learning"],
      },
      {
        name: "อภิชญา โชคดี",
        skills: ["การตลาดออนไลน์", "การเขียนบทความ"],
      },
      {
        name: "ชานนท์ สิริโสภา",
        skills: ["การวิเคราะห์ข้อมูลทางสถิติ", "การวิจัยและพัฒนา"],
      },
];
console.log(interns);
console.log(companies);
// ฟังก์ชันสำหรับสุ่มข้อมูลใน array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// ฟังก์ชันจับคู่ผู้ประกอบการกับนักศึกษาฝึกงาน
function matchPartners() {
    // สุ่มข้อมูลผู้ประกอบการและนักศึกษาฝึกงาน
    shuffleArray(companies);
    shuffleArray(interns);

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // ล้างเนื้อหาเก่าก่อน

    companies.forEach(company => {
        interns.forEach(intern => {
            const matchingSkills = company.skills.filter(skill => intern.skills.includes(skill));
            if (matchingSkills.length > 0) {
                const match = document.createElement('div');
                match.className = 'match';
                match.innerHTML = `
                    <h2>ผู้ประกอบการ: ${company.name}</h2>
                    <p>จับคู่กับ: ${intern.name}</p>
                    <p>ความถนัดที่ตรงกัน: ${matchingSkills.join(', ')}</p>
                `;
                resultsDiv.appendChild(match);
            }
        });
    });
}
