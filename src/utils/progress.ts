/**
 * <p>
 * 自定义进度条/加载条
 * </p>
 *
 * @version: v1.0
 * @author: Clover You
 * @email: cloveryou02@163.com
 * @create: 2022-08-29 13:34
 **/
import Nprogress from 'nprogress'

export default class Zprogress {
  private static count: number = 0

  public static done() {
    Zprogress.count > 0 && (Zprogress.count--)
    
    if (Zprogress.count < 1) {
      Nprogress.done()
    }
  }
  
  public static start() {
    Zprogress.count++
    Nprogress.inc()
   }
}