from setuptools import setup, find_packages

setup(
    name="raidot-ai",
    version="0.1.0",
    packages=find_packages(),
    install_requires=[
        "openai>=1.12.0",
        "langchain>=0.1.16",
        "langchain-community>=0.0.38",
        "langchain-openai>=0.1.3",
        "transformers>=4.39.3",
        "torch>=2.2.2",
        "numpy>=1.24.3",
        "crewai>=0.28.0",
        "pyautogen>=0.2.0",
        "fastapi>=0.110.0",
        "uvicorn>=0.29.0",
        "requests>=2.31.0",
        "python-dotenv>=1.0.1",
        "pydantic>=2.6.4",
        "tiktoken>=0.6.0",
        "faiss-cpu>=1.8.0",
        "jupyter>=1.0.0",
        "python-socketio>=5.11.1",
    ],
)