export interface IUseCase<T, U> {
  execute(params: U): Promise<T>;
}
