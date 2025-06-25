export default interface ApiResponse<T> {
  code: String;
  message: string;
  body:T
}
