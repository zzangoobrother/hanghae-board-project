package com.sparta.hanghaeboardproject.service;

import com.sparta.hanghaeboardproject.domain.Board;
import com.sparta.hanghaeboardproject.domain.BoardDto;
import com.sparta.hanghaeboardproject.domain.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardRepository boardRepository;

    @Transactional
    public Long update(Long id, BoardDto boardDto) {
        Board board = boardRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("아이디가 존재하지 않습니다.")
        );
        board.update(boardDto);
        return board.getId();
    }
}
