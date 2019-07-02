export interface Page {
  id: number,
  title: string,
  content: string
}

export interface PageList {
  [id: number]: Page
}



