<?php

namespace SyntaxError\ApiBundle\Repository;

use Doctrine\ORM\EntityRepository;
use SyntaxError\ApiBundle\Entity\ArchiveDayBarometer;

/**
 * ArchiveDayBarometerRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class ArchiveDayBarometerRepository extends EntityRepository
{
    /**
     * @param \DateTime $dateTime
     * @param $max
     * @return null|ArchiveDayBarometer
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findMonthRecord(\DateTime $dateTime, $max = true)
    {
        $from = (new \DateTime( $dateTime->format('Y-m-01 00:00:00') ))->getTimestamp();
        $to = (new \DateTime( $dateTime->format('Y-m-t 23:59:59') ))->getTimestamp();
        return $this->getEntityManager()->getRepository("SyntaxErrorApiBundle:ArchiveDayBarometer")->createQueryBuilder('a')
            ->where('a.datetime BETWEEN :from AND :to')
            ->setParameter('from', $from)->setParameter('to', $to)
            ->orderBy('a.max', $max ? 'desc' : 'asc')->setMaxResults(1)->getQuery()->getOneOrNullResult();
    }

    /**
     * @param \DateTime $dateTime
     * @param bool|true $max
     * @return null|ArchiveDayBarometer
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findYearRecord(\DateTime $dateTime, $max = true)
    {
        $from = (new \DateTime( $dateTime->format('Y-01-01 00:00:00') ))->getTimestamp();
        $to = (new \DateTime( $dateTime->format('Y-12-31 23:59:59') ))->getTimestamp();
        return $this->getEntityManager()->getRepository("SyntaxErrorApiBundle:ArchiveDayBarometer")->createQueryBuilder('a')
            ->where('a.datetime BETWEEN :from AND :to')
            ->setParameter('from', $from)->setParameter('to', $to)
            ->orderBy('a.max', $max ? 'desc' : 'asc')->setMaxResults(1)->getQuery()->getOneOrNullResult();
    }
}
