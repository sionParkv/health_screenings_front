const sorts = [
  {
    lable: '이름 ▲',
    order: 'NAME_ASC',
  },
  {
    lable: '이름 ▼',
    order: 'NAME_DESC',
  },
  {
    lable: '번호 ▲',
    order: 'NUMBER_ASC',
  },
  {
    lable: '번호 ▼',
    order: 'NUMBER_DESC',
  },
]

const types = [
  {
    label: '전체',
    where: 'All',
  },
  {
    label: '종합건진접수',
    where: 'O',
  },
  {
    label: '일반건진접수',
    where: 'B',
  },
]

const selectors = { sorts, types }

export { selectors }
