import { useEffect, useState } from "react";
import { Project } from "../types/projects";
import { dummyData } from "../projects";

export default function useProjects() {


    const [projects, setProjects] = useState<Project[]>(() => {
        try {
            const savedProjects = localStorage.getItem("projects");
            return savedProjects ? JSON.parse(savedProjects) : dummyData;
        } catch (e) {
            console.error("Error loading projects from localStorage:", e);
            return dummyData;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem("projects", JSON.stringify(projects));
        } catch (e) {
            console.error("Error saving projects to localStorage:", e);
        }
    }, [projects]);

    return {
        projects,
        setProjects,
        getRandomProjects,
    };
}
