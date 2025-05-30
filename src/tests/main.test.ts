import { renderTools, getTools } from "../scripts/main";

describe("getTools", () => {
    it("should return tools", async () => {
        const tools = await getTools();
        expect(tools).toBeDefined();
    });
});