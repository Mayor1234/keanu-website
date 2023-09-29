import { fetchMovies } from '@/app/utils';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, response: NextResponse) {
  const start = parseInt(request.nextUrl.searchParams.get('start') as string);
  const end = parseInt(request.nextUrl.searchParams.get('end') as string);

  if (isNaN(Number(start)) || isNaN(Number(end))) {
    return;
  }

  const { movies, total } = await fetchMovies(start, end);
  return NextResponse.json({ movies, total }, { status: 200 });
}
