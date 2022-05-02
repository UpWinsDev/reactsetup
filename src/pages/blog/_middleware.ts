import type { NextFetchEvent, NextRequest} from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  // return new Response ('Hello World')
  // pegar o cookie de autenticação
  // chamar alguma api
  
  // return NextResponse.rewrite('http://localhost:3000/loadRepositories')
}
