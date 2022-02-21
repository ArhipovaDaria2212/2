let students = [ 
    {id: 1, name: 'Андрей', surname: 'Артамонов'},
    {id: 2, name: 'Дарья', surname: 'Архипова'},
    {id: 3, name: 'Николай', surname: 'Баркалов'},
    {id: 4, name: 'Георгий', surname: 'Бочкарев'},
    {id: 5, name: 'Матвей', surname: 'Гаврилов'}
]

function load_all() {
    let table = document.getElementById('tbl_all')
    for (let i = 0; i < students.length; i++) {
        let id = students[i].id
        let name = students[i].name
        let surname = students[i].surname

        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        
        td1.textContent = id
        td2.textContent = name
        td3.textContent = surname

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        table.appendChild(tr)
    }
}

let id_current = 0

function load_student(id) {
    
    let head = document.getElementById('zagolovok')
    head.textContent = 'Информация о студенте № ' + students[id].id
    
    document.getElementById('name').textContent = students[id].name
    document.getElementById('surname').textContent = students[id].surname

}

function next() {
    id_current++
    if (id_current > 0) document.getElementById('btn_prev').disabled = false
    if (id_current === students.length-1) {
        document.getElementById('btn_next').disabled = true
    }
    
    load_student(id_current)
}

function prev() {
    id_current--
    if (id_current === 0) document.getElementById('btn_prev').disabled = true
    if (id_current !== students.length-1) {
        document.getElementById('btn_next').disabled = false
    }
    load_student(id_current)
}