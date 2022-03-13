package com.devsuperior.dsmuvie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmuvie.entities.Score;
import com.devsuperior.dsmuvie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{

}
