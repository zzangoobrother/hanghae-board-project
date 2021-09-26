$(document).ready(function () {
    //showAllBoard();
})

function showBoard() {
    $.ajax({
        type: 'GET',
        url: `/api/board/${id}`,
        success: function (response) {
            window.location.href = 'board.html'
            $('#board').append(addBoardHtml(response.board));
        }
    })
}

function addBoardHtml(board) {
    return`<tbody>
            <tr>
                <td>${board.title}</td>
            </tr>
            <tr>
                <td>${board.writer}</td>
            </tr>
            <tr>
                <td>${board.contents}</td>
            </tr>
          </tbody>`
}