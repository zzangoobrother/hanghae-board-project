let temp;

$(document).ready(function () {
    $('#one-board').hide()
    $('#update-board').hide()
    showAllBoard();
})

function showAllBoard() {
    $.ajax({
        type: 'GET',
        url: '/api/boards',
        success: function (response) {
            for (let i = 0; i < response.length; i++) {
                let board = response[i];
                let tempHtml = addHtml(board);
                $('#tableTbody').append(tempHtml);
            }
        }
    })
}

function addHtml(board) {
    return `<tr onclick="showBoard(${board.id})">
              <th>${board.id}</th>
              <th>${board.title}</th>
              <th>${board.writer}</th>
              <th>${transTime(board.modifiedAt)}</th>
           </tr>`
}

function transTime(x) {
    return x.replace();
}

function showBoard(id) {
    $('#one-board').show()
    $('#main-boards').hide()
    $('#update-board').hide()
    temp = id;

    $.ajax({
        type: 'GET',
        url: '/api/board/' + id,
        success: function (response) {
            $('#board').append(addBoardHtml(response));
        }
    })
}

function addBoardHtml(board) {
    return `<tr>
              <th>${board.title}</th>
           </tr>
            <tr>
              <th>${board.writer}</th>
           </tr>
            <tr>
              <th>${board.contents}</th>
           </tr>`
}

function boardWrite() {
    let title = $('#board-title').val().trim();
    let write = $('#board-write').val().trim();
    let contents = $('#board-contents').val().trim();

    let data = {
        'title' : title,
        'writer' : write,
        'contents' : contents
    }

    $.ajax({
        type: 'POSt',
        url: '/api/board',
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (response) {
            alert('작성 완료');
            window.location.href = '/'
        }
    })
}

function showUpdateBoard() {
    $('#one-board').hide()
    $('#main-boards').hide()
    $('#update-board').show()

    $.ajax({
        type: 'GET',
        url: '/api/board/' + temp,
        success: function (response) {
            $('#update-title').val(`${response.title}`)
            $('#update-write').val(`${response.writer}`)
            $('#update-contents').val(`${response.contents}`)
        }
    })
}

function updateBoard() {
    let title = $('#update-title').val().trim();
    let write = $('#update-write').val().trim();
    let contents = $('#update-contents').val().trim();

    let data = {
        'title' : title,
        'writer' : write,
        'contents' : contents
    }

    $.ajax({
        type: 'PUT',
        url: '/api/board/' + temp,
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (response) {
            alert('수정 완료');
            window.location.href = '/'
        }
    })
}