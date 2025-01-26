import clipboard from "@/public/images/clipboard.svg";

export default function NoTasks() {
    return (<div className="no-tasks-card rounded-md border-t-[1px] border-t-top pt-5 gap-5 relative top-10 bottom-10 text-center flex flex-col items-center justify-center">
        <img src={clipboard.src} alt="clipboard" />
        <p className="text-emptyText no-tasks-heading">
            You don&apos;t have any tasks registered yet.
        </p>
        <p className="text-emptyText no-tasks-text">
            Create tasks and organize your to-do items.
        </p>
    </div>
    );
}
