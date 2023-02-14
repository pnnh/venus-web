import { calcPagination } from "@/models/pagination";
import { PictureModel, selectPictureModels } from "@/models/picture";
import React from "react";
import styles from './page.module.css'


export default async function Home() {
  const piclist = await LoadPictureList()
  return <div>
    {piclist}
  </div>
}


export async function LoadPictureList(page: number = 1) {
  const pageSize = 8
  const result = await selectPictureModels(page, pageSize)
  const pagination = calcPagination(page, result.count, pageSize);
  console.log("pagination", pagination)
  return <div>
    <div>
      <div className={styles.pictureList}>
        {result.list.map((model) => {
          return <PictureItem key={model.pk} model={model} />
        })
        }
      </div>
      <div className={styles.pageList}>
        {pagination.previousPage >= 1 ? (<a href={"/" + pagination.previousPage}
          className={styles.pageItem}>上一页</a>) : (<></>)}
        {[...Array(pagination.endPage - pagination.startPage + 1).keys()].map((_, index) => {
          return <a key={index} href={"/" + (pagination.startPage + index)}
            className={pagination.currentPage == pagination.startPage + index ?
              styles.pageItemActive : styles.pageItem}>{pagination.startPage + index}</a>
        })}
        {pagination.nextPage <= pagination.maxPage ? (<a href={"/" + pagination.nextPage}
          className={styles.pageItem}>下一页</a>) : (<></>)}
      </div>
    </div>
  </div>
}

export function PictureItem(props: { model: PictureModel }) {

  return <div className={styles.pictureItem}>
    <div> 
        <a className={styles.pictureLink} href={"/picture/" + props.model.pk}>
          <img src={props.model.filePath} alt={props.model.description} />
        </a>  
    </div>
  </div>
}
