/**
 * <p>
 * 登录方式
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2022-11-21 21:13
 */

import { Button, Col, Dropdown, Popover, Row, Space } from "antd"

import { GithubSymbolIcon } from "@/components/icon/symbol/github"
import styles from './index.module.less'
import { AlibabaSymbolIcon } from "@/components/icon/symbol/AlibabaSymbolIcon"

export const LoginMethodTab = () => {
  const fontSize = 32
  return <>
    <Row justify={'center'} align={'middle'} gutter={48}>
      <Col>
        <Button type={'link'} style={{ margin: 0, padding: 0 }}>
          <AlibabaSymbolIcon icon="weixin1" style={{ fontSize }} />
        </Button>
      </Col>
      <Col>
        <Button type={'link'} style={{ margin: 0, padding: 0 }}>
          <AlibabaSymbolIcon icon="QQ" style={{ fontSize }} />
        </Button>
      </Col>
      <Col>
        <Button type={'link'} style={{ margin: 0, padding: 0 }}>
          <AlibabaSymbolIcon icon="gitee" style={{ fontSize }} />
        </Button>
      </Col>
      <Col>
        <Button type={'link'} style={{ margin: 0, padding: 0 }}>
          <AlibabaSymbolIcon icon="github" style={{ fontSize }} />
        </Button>
      </Col>
      <Col>
        <Popover
          content={
            <Row justify={'center'} align={'middle'} gutter={24}>
              <Col>
                <Button type={'link'} style={{ margin: 0, padding: 0 }}>
                  <AlibabaSymbolIcon icon="weixin1" style={{ fontSize }} />
                </Button>
              </Col>
              <Col>
                <Button type={'link'} style={{ margin: 0, padding: 0 }}>
                  <AlibabaSymbolIcon icon="QQ" style={{ fontSize }} />
                </Button>
              </Col>
              <Col>
                <Button type={'link'} style={{ margin: 0, padding: 0 }}>
                  <AlibabaSymbolIcon icon="gitee" style={{ fontSize }} />
                </Button>
              </Col>
            </Row>
          }
        >
          <Button type={'link'} style={{ margin: 0, padding: 0 }}>
            <AlibabaSymbolIcon icon="13more_01" style={{ fontSize }} />
          </Button>
        </Popover>
      </Col>
    </Row>
  </>
}
