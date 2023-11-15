package com.monsters.hanbang.repository;

import com.monsters.hanbang.entity.TentLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TentLogRepository extends JpaRepository<TentLog, Long> {

}
