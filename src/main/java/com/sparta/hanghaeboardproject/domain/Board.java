package com.sparta.hanghaeboardproject.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor
public class Board extends Timestamped {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String writer;

    @Column(nullable = false)
    private String contents;

    public Board(String title, String writer, String contents) {
        this.title = title;
        this.writer = writer;
        this.contents = contents;
    }

    public Board(BoardDto boardDto) {
        this.title = boardDto.getTitle();
        this.writer = boardDto.getWriter();
        this.contents = boardDto.getContents();
    }

    public void update(BoardDto boardDto) {
        this.contents = boardDto.getContents();
    }
}
