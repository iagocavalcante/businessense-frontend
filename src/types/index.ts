export interface User {
  ID: number
  Email: string
  Firstname: string
  Lastname: string
  Token?: string
}

export interface RegisterData {
  email: string
  password: string
  firstname: string
  lastname: string
}

export interface LoginData {
  email: string
  password: string
}

export interface Company {
  ID: number
  Name: string
  Revenue: number
  AccountID: number
  IndustryID: number
  Industry?: Industry
}

export interface Industry {
  ID: number
  Name: string
}

export interface PainPoint {
  ID: number
  Name: string
}

export interface Issue {
  ID: number
  Name: string
  Description: string
  Stats: string
  RiskFactors: string
}

export interface IssueRelevance {
  IssueID: number
  Name: string
  Relevance: number
}

export interface Solution {
  ID: number
  Name: string
  Description: string
  Implementation: string
  SkillsTools: string
}

export interface Constraint {
  ID: number
  Name: string
  Description: string
  Weight?: number
  asked?: boolean
}

export interface Project {
  ID: number
  Name: string
  CompanyID: number
  PainPoints?: PainPoint[]
  Issues?: Issue[]
  Solutions?: Solution[]
}

export interface ApiResponse<T = unknown> {
  status: boolean
  message: string
  data?: T
  account?: User
  company?: Company
  companies?: Company[]
  industries?: Industry[]
  painpoints?: PainPoint[]
  issues?: IssueRelevance[]
  issue?: Issue
  solutions?: Solution[]
  constraints?: Constraint[]
}
