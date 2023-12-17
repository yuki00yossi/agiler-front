import {Input, Button} from "@nextui-org/react";


export default function Login()
{
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="text-center">
                <h2>会員登録</h2>
            </div>
            <div className="mt-5 w-60 sm:mx-auto sm:w-full sm:max-w-sm p-5 border bg-white">
                <form className="space-y-3" action="#" method="POST">
                    <div>
                        <Input isRequired type="email" name="email" label="メールアドレス" labelPlacement={'inside'} description={'必須項目です'} />
                    </div>
                    <div>
                        <Input isRequired type="password" name="password" label="パスワード" labelPlacement={'inside'} description={'必須項目です'} />
                    </div>
                    <div>
                        <Input isRequired type="password" name="password_confirm" label="パスワード（確認用）" labelPlacement={'inside'} description={'必須項目です'} />
                    </div>
                    <div className="">
                        <Input isRequired type="text" name="last_name" label="姓" labelPlacement={'inside'} description={'必須項目です'} />
                    </div>
                    <div className="">
                        <Input isRequired type="text" name="first_name" label="名" labelPlacement={'inside'} description={'必須項目です'} />
                    </div>
                    <div className="box mt-2">
                        <Button color="primary" variant="ghost" className="w-full">登録</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}