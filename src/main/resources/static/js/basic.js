let temp;

$(document).ready(function () {
    showAllBoard(0);
})

function showAllBoard(page) {
    $('#one-board').hide()
    $('#update-board').hide()
    $('#main-boards').show()

    $('#tableTbody').empty()
    $.ajax({
        type: 'GET',
        url: '/api/boards/',
        data: {"page": page},
        success: function (response) {
            console.log(response)
            let boards = response.content;
            for (let i = 0; i < boards.length; i++) {
                let board = boards[i];
                let tempHtml = addHtml(board);
                $('#tableTbody').append(tempHtml);
            }

            $('#pageing-num').empty();
            let previous = response.number;
            let pageNumber = response.pageable.pageNumber;
            let pageSize = response.pageable.pageSize;
            let totalPages = response.totalPages;
            let startPage = Math.floor(pageNumber / pageSize) * pageSize + 1;
            let tempEndPage = startPage + pageSize - 1
            let endPage = tempEndPage > totalPages ? totalPages : tempEndPage;

            let temp
            if (!response.first) {
                temp = `<li class="page-item">
                            <a class="page-link" onclick='showAllBoard(${previous-1})' aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>`
            }
            $('#pageing-num').append(temp);
            console.log(startPage)
            console.log(endPage)
            for (let i = startPage; i <= endPage; i++) {
                temp = `<li class="page-item">
                            <a class="page-link" onclick="showAllBoard(${i-1})">${i}</a>
                        </li>`
                $('#pageing-num').append(temp);
            }

            if (!response.last) {
                temp = `<li class="page-item">
                            <a class="page-link" onclick="showAllBoard(${previous+1})" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>`
            }
            $('#pageing-num').append(temp);
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
    let date = new Date(x);
    let month = date.getMonth()+1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;
    hour = hour >= 10 ? hour : '0' + hour;
    minute = minute >= 10 ? minute : '0' + minute;
    second = second >= 10 ? second : '0' + second;
    return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}

function showBoard(id) {
    $('#one-board').show()
    $('#main-boards').hide()
    $('#update-board').hide()
    $('#board').empty()
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