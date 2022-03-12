package com.devsuperior.dsmuvie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmuvie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
