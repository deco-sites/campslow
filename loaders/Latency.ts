export interface Props {
  /**
  * @description The description of name.
  */
  timeout?: number;
}

export default async function loader({ timeout = 100 }: Props): Promise<Props> {
  await new Promise(resolve => setTimeout(resolve, timeout));

  return { timeout }
}