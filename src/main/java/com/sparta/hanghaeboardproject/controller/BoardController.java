package com.sparta.hanghaeboardproject.controller;

import com.sparta.hanghaeboardproject.domain.Board;
import com.sparta.hanghaeboardproject.domain.BoardDto;
import com.sparta.hanghaeboardproject.domain.BoardRepository;
import com.sparta.hanghaeboardproject.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class BoardController {

    private final BoardRepository boardRepository;
    private final BoardService boardService;

    // 게시판 전체 조회
    @GetMapping("/api/boards")
    public List<Board> getBoards(Model model) {
        return boardRepository.findAllByOrderByModifiedAtDesc();
    }

    @GetMapping("/api/board/{id}")
    public Board getBoard(@PathVariable Long id) {
        return boardRepository.findById(id).get();
    }

    // 게시판 저장
    @PostMapping("/api/board")
    public Board createBoard(@RequestBody BoardDto boardDto) {
        Board board = new Board(boardDto);
        return boardRepository.save(board);
    }

    @PutMapping("/api/board/{id}")
    public Long updateBoard(@PathVariable Long id, @RequestBody BoardDto boardDto) {
        return boardService.update(id, boardDto);
    }

    @DeleteMapping("/api/board")
    public Long deleteBoard(@PathVariable Long id) {
        return id;
    }
}