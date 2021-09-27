package com.sparta.hanghaeboardproject.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sparta.hanghaeboardproject.utiles.HtmlCharacterEscapes;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;

@RequiredArgsConstructor
@Configuration
public class WebMvcConfig {

    private final ObjectMapper objectMapper;

    @Bean
    public MappingJackson2HttpMessageConverter jsonEscapeConverter() {
        System.out.println("filter");
        ObjectMapper copy = objectMapper.copy();
        copy.getFactory().setCharacterEscapes(new HtmlCharacterEscapes());
        return new MappingJackson2HttpMessageConverter(copy);
    }
}
