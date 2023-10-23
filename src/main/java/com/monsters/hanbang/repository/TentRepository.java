package com.monsters.hanbang.repository;

import com.monsters.hanbang.entity.Tent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TentRepository extends JpaRepository<Tent, Long> {

}
