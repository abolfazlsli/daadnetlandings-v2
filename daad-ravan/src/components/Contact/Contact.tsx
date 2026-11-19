"use client";

import { App, Button, Form, Input } from "antd";
import { useContactStore } from "@/store/contactStore";
import type { ContactPayload } from "@/lib/api";
import { LoopArrow, SendIcon } from "../icons";
import styles from "./Contact.module.css";

const IR_MOBILE = /^(\+98|0)?9\d{9}$/;

export default function Contact() {
  const [form] = Form.useForm<ContactPayload>();
  const { message } = App.useApp();
  const status = useContactStore((s) => s.status);
  const submit = useContactStore((s) => s.submit);

  const onFinish = async (values: ContactPayload) => {
    const ok = await submit(values);
    if (ok) {
      message.success("پیام شما ثبت شد؛ کارشناسان دادرای به‌زودی با شما تماس می‌گیرند.");
      form.resetFields();
    } else {
      message.error(useContactStore.getState().error ?? "ارسال پیام با خطا مواجه شد");
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={`shell ${styles.inner}`}>
        <div className={styles.copy}>
          <h2 className={styles.heading}>
            نمی دانی <mark className={styles.mark}> کدام مشاوره </mark> برای تو مناسب است ؟
          </h2>
          <p className={styles.question}>سوالی دارید؟ نیاز به مشاوره کارشناسی دارید ؟</p>
          <p className={styles.text}>
            مشکلت را به زبان خودت بگو: کارشناسان دادرای کمک می کند که بفهمی بهتر است متن حقوقی بگیری،، وکیل
            درخواست کنی یا ابتدا مشاوره بگیری
          </p>
          <LoopArrow className={styles.arrow} />
        </div>

        <div className={styles.card}>
          <h3 className={styles.formTitle}>
            فرم <span>تماس با ما</span>
          </h3>
          <Form form={form} onFinish={onFinish} requiredMark={false} className={styles.form}>
            <div className={styles.row}>
              <Form.Item name="fullName" rules={[{ required: true, whitespace: true, message: "نام را وارد کنید" }]}>
                <Input size="large" placeholder="نام و نام خانوادگی" className={styles.input} />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[
                  { required: true, message: "شماره همراه را وارد کنید" },
                  { pattern: IR_MOBILE, message: "شماره همراه معتبر نیست" },
                ]}
              >
                <Input size="large" placeholder="شماره همراه" inputMode="tel" className={styles.input} />
              </Form.Item>
            </div>
            <Form.Item name="message" rules={[{ required: true, whitespace: true, message: "پیام خود را بنویسید" }]}>
              <Input.TextArea placeholder="پیام خود را بنویسید ..." className={styles.textarea} />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={status === "loading"}
              className={styles.submit}
              icon={<SendIcon size={20} />}
              iconPlacement="end"
            >
              ارسال
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
}
