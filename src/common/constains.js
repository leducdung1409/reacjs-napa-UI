import { Empty } from "./Icon";

export const userStatus = {
    invalid: '不許可',
    valid: '有効',
}

export const userRole = {
    editor: '編集者',
    viewer: '閲覧者',
}

export const localeEmptyDashboard = {
    emptyText: (
       <div>
           <img src={Empty.EMPTY_IMG} alt ='' /> 
       <p style={{ marginBottom : 0}}>まだテナントはありません。今す</p>
       <p style={{ marginBottom : '100px'}}> ぐテナントを作成しましょう！</p>
       </div>
    )
  };