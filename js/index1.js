let students = []
let id_current = 0

function load_from_site() {
    $.get('http://217.71.129.139:4035/students.php', function(data){
            students = JSON.parse(data)['response']
        });
}

function load_all() {
    load_from_site()
	let table = document.getElementById('tbl_all')
	for (let i = 0; i < students.length; i++) {
		let id = students[i].id
		let name = students[i].name
		let surname = students[i].surname
		
		// создадим строку и 3 ячейки
		let tr = document.createElement('tr')
		let td1 = document.createElement('td')
		let td2 = document.createElement('td')
		let td3 = document.createElement('td')

		// запишем данные в ячейки
		td1.textContent = id
		td2.textContent = name
		td3.textContent = surname

		// вставим ячейки в строку
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);

		// вставим строку в таблицу
		table.appendChild(tr)
	}
}
    
    function load_student(id) {
    
    let head = $('#zagolovok')
    head.prop('textContent', 'Информация о студенте № ' + students[id].id)
    
    $('#name').prop('textContent', students[id].name)
    $('#surname').prop('textContent', students[id].surname)
    $('#scores').prop('textContent', students[id].scores)
    let ball = Array.from(students[id].scores).reduce((a, b) => (a + b)) / 5
    $('#average').prop('textContent', ball)
    $('#logo').prop('src', 'http://217.71.129.139:4035/' + students[id].logo)
}
    
    function next() {
    id_current++
    if (id_current > 0) $('#btn_prev').prop('disabled', false)
    if (id_current === students.length-1) {
    $('#btn_next').prop('disabled', true)
    }
    
    load_student(id_current)
    }
    
    function prev() {
    id_current--
    if (id_current === 0) $('#btn_prev').prop('disabled', true)
    if (id_current !== students.length-1) {
    $('#btn_next').prop('disabled', false) 
    }
    load_student(id_current)
    } 
    
    