// 이 파일에다가 네트워크 리퀘스트 함수들을 모아놓고 사용

export async function getReviews() {
  const response = await fetch('https://learn.codeit.kr/api/film-reviews');
  const body = await response.json();
  return body;
}
