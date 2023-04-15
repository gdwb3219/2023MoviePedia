// 이 파일에다가 네트워크 리퀘스트 함수들을 모아놓고 사용

export async function getReviews({
  order = 'createdAt',
  offset = 0,
  limit = 6,
}) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const response = await fetch(
    `https://learn.codeit.kr/api/film-reviews?${query}`
  );
  if (!response.ok) {
    throw new Error('데이터를 불러오지 못했습니다.');
  }
  const body = await response.json();
  return body;
}
