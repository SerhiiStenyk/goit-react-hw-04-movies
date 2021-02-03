import queryString from 'query-string';

export default function queryParams(query) {
  return queryString.parse(query);
}
