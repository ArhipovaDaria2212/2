let students = []
let id_current = 0

function load_from_site() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://217.71.129.139:4035/students.php');
    xhr.send();
    xhr.onload = function() {
        if (xhr.status != 200) {
            alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        }
        else {
            students = JSON.parse(xhr.responseText)['response']
        }
    };
    xhr.onerror = function() {
        alert("запрос не удался")
    }
}