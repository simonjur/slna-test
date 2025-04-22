import * as core from '@actions/core';
import * as github from '@actions/github';

//yolo

async function run(): Promise<void> {
    try {
        // Get the input message
        const message: string = core.getInput('message', { required: true });

        // Write the message to the step summary
        await core.summary.addRaw(message).write();

        // Log the message to the console
        core.info(`Message added to step summary: ${message}`);
    } catch (error) {
        if (error instanceof Error) {
            core.setFailed(error.message);
        }
    }
}

run();